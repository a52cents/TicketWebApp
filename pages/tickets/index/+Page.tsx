import React from "react";
import { useData } from "vike-react/useData";
import { Link } from "@/components/Link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Fonction utilitaire pour formater les dates
function formatDate(dateString: string | Date): string {
  try {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString;

    if (isNaN(date.getTime())) {
      console.error("Date invalide:", dateString);
      return "Date invalide";
    }

    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch (error) {
    console.error("Erreur lors du formatage de la date:", error);
    return "Date invalide";
  }
}

// Fonction pour obtenir la classe CSS de couleur basée sur la priorité
function getPriorityClass(priorite: string): string {
  switch (priorite) {
    case "HAUTE":
      return "bg-red-100 text-red-800";
    case "MOYENNE":
      return "bg-yellow-100 text-yellow-800";
    case "BASSE":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

// Fonction pour obtenir la classe CSS de couleur basée sur le statut
function getStatusClass(statut: string): string {
  switch (statut) {
    case "NOUVEAU":
      return "bg-[#e7f3fb] text-[#1A79B5]";
    case "EN_COURS":
      return "bg-orange-100 text-orange-800";
    case "RESOLU":
      return "bg-green-100 text-green-800";
    case "FERME":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

interface PageData {
  tickets: Array<{
    id: string;
    titre: string;
    description: string;
    statut: string;
    priorite: string;
    dateCreation: string;
    dateMiseAJour: string;
    utilisateurId: string;
    Utilisateur?: {
      nom: string;
    };
  }>;
}

export default function TicketsPage() {
  // Récupération des données depuis le hook useData
  const data = useData<PageData & { error?: string }>();

  // Vérification si les données sont disponibles et gestion d'erreurs
  const tickets = data?.tickets || [];
  const error = data?.error;

  // Pour le débogage
  console.log("Données reçues:", data);

  // Si une erreur est survenue lors du chargement des données
  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Card className="border-red-300">
          <CardHeader>
            <CardTitle className="text-red-600">
              Erreur lors du chargement des tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">
              Une erreur est survenue lors de la récupération des tickets :{" "}
              {error}
            </p>
            <div className="mt-4">
              <Button onClick={() => window.location.reload()}>
                Réessayer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Liste des tickets</h1>
        <Link href="/tickets/new" className="contents">
          <Button>Créer un nouveau ticket</Button>
        </Link>
      </div>{" "}
      {!tickets || tickets.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-10">
              <h3 className="text-lg font-medium">Aucun ticket trouvé</h3>
              <p className="text-gray-500 mt-2">
                Il n'y a actuellement aucun ticket dans le système.
              </p>
              <div className="mt-6">
                <Link href="/tickets/new" className="contents">
                  <Button>Créer votre premier ticket</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {tickets.map((ticket: any) => (
            <Card key={ticket.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between">
                  <CardTitle>{ticket.titre}</CardTitle>
                  <div className="flex gap-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityClass(
                        ticket.priorite
                      )}`}
                    >
                      {ticket.priorite === "HAUTE"
                        ? "Haute"
                        : ticket.priorite === "MOYENNE"
                        ? "Moyenne"
                        : "Basse"}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(
                        ticket.statut
                      )}`}
                    >
                      {ticket.statut === "NOUVEAU"
                        ? "Nouveau"
                        : ticket.statut === "EN_COURS"
                        ? "En cours"
                        : ticket.statut === "RESOLU"
                        ? "Résolu"
                        : "Fermé"}
                    </span>
                  </div>
                </div>
                <CardDescription>
                  Créé le {formatDate(ticket.dateCreation)} par{" "}
                  {ticket.Utilisateur?.nom || "Utilisateur inconnu"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {ticket.description.length > 150
                    ? `${ticket.description.substring(0, 150)}...`
                    : ticket.description}
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 flex justify-between">
                <div className="text-sm text-gray-500">
                  Mis à jour le {formatDate(ticket.dateMiseAJour)}
                </div>
                <Link href={`/tickets/${ticket.id}`} className="contents">
                  <Button size="sm" variant="outline">
                    Voir les détails
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
