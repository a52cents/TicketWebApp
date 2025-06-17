import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePageContext } from "vike-react/usePageContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "@/components/Link";
import { useToast } from "@/components/ui/toast";

export default function NewTicketPage() {
  const { urlPathname } = usePageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    priorite: "MOYENNE",
  });
  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation du formulaire
    if (!formData.titre.trim()) {
      showToast({
        type: "error",
        title: "Erreur de validation",
        message: "Le titre du ticket est obligatoire",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Utilisation de la nouvelle route API qui suit le même format que /api/todo/create
      const response = await fetch("/api/tickets/create", {
        method: "POST",
        body: JSON.stringify({
          text: formData.titre, // Pour compatibilité avec le format todo
          titre: formData.titre,
          description: formData.description,
          priorite: formData.priorite,
          id: uuidv4(),
          timestamp: new Date().toISOString(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Afficher une notification de succès
        showToast({
          type: "success",
          title: "Ticket créé",
          message: "Votre ticket a été créé avec succès",
        });

        console.log("Ticket créé avec succès, redirection...");

        // Approche 1: Redirection avec un délai plus long
        setTimeout(() => {
          // Utiliser l'API History au lieu de window.location
          window.history.pushState({}, "", "/tickets");
          // Déclencher un événement popstate pour informer l'application du changement de route
          window.dispatchEvent(new PopStateEvent("popstate"));

          // Fallback si la navigation par history ne fonctionne pas
          setTimeout(() => {
            if (window.location.pathname !== "/tickets") {
              window.location.replace("/tickets");
            }
          }, 200);
        }, 1000); // Un peu plus de délai pour voir la notification
      } else {
        // Vérifier le type de contenu de la réponse
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          console.error("Erreur lors de la création du ticket:", error);
          showToast({
            type: "error",
            title: "Erreur",
            message:
              error.message ||
              "Une erreur est survenue lors de la création du ticket",
          });
        } else {
          // Si ce n'est pas du JSON, lire le texte brut
          const textError = await response.text();
          console.error(
            "Erreur lors de la création du ticket (réponse non-JSON):",
            textError.substring(0, 200) + "..."
          );
          showToast({
            type: "error",
            title: "Erreur serveur",
            message:
              "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
          });
        }
        setIsSubmitting(false); // Seulement réinitialiser si erreur
      }
    } catch (error) {
      console.error("Erreur lors de la création du ticket:", error);
      showToast({
        type: "error",
        title: "Erreur",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur inattendue est survenue",
      });
      setIsSubmitting(false); // Seulement réinitialiser si erreur
    }
  };
  return (
    <>
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>Formulaire de ticket</CardTitle>
          <CardDescription>
            Remplissez le formulaire ci-dessous pour créer un nouveau ticket de
            support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form className="space-y-6" onSubmit={handleSubmit}>
            {" "}
            <div className="grid gap-6 md:grid-cols-2">
              <FormField className="space-y-2">
                <FormLabel htmlFor="titre">Titre</FormLabel>
                <Input
                  id="titre"
                  name="titre"
                  placeholder="Saisissez un titre pour votre ticket"
                  value={formData.titre}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <FormDescription>
                  Un titre concis et descriptif pour votre problème
                </FormDescription>
              </FormField>

              <FormField className="space-y-2">
                <FormLabel htmlFor="priorite">Priorité</FormLabel>
                <Select
                  name="priorite"
                  value={formData.priorite}
                  onValueChange={(value) =>
                    handleSelectChange("priorite", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une priorité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BASSE">Basse</SelectItem>
                    <SelectItem value="MOYENNE">Moyenne</SelectItem>
                    <SelectItem value="HAUTE">Haute</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Sélectionnez la priorité de votre ticket
                </FormDescription>
              </FormField>
            </div>
            <FormField className="space-y-2">
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Décrivez votre problème en détail"
                value={formData.description}
                onChange={handleChange}
                rows={8}
                required
                className="w-full"
              />
              <FormDescription>
                Veuillez fournir autant de détails que possible
              </FormDescription>
            </FormField>{" "}
            <div className="pt-6 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="px-8"
              >
                {isSubmitting ? "Création en cours..." : "Créer le ticket"}
              </Button>{" "}
            </div>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
