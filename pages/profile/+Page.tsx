import React from "react";
import { useData } from "vike-react/useData";
import { Link } from "@/components/Link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Fonction pour formater les dates
const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
};

// Obtenir la classe de badge pour le rôle
const getRoleBadgeClass = (role: string): string => {
  switch (role) {
    case "AGENT":
      return "bg-[#e7f3fb] text-[#1A79B5]";
    case "USER":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Obtenir la classe de badge pour la priorité
const getPriorityClass = (priority: string): string => {
  switch (priority) {
    case "HAUTE":
      return "bg-red-100 text-red-800";
    case "MOYENNE":
      return "bg-yellow-100 text-yellow-800";
    case "BASSE":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Obtenir la classe de badge pour le statut
const getStatusClass = (status: string): string => {
  switch (status) {
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
};

export default function ProfilePage() {
  const data = useData<{
    user: {
      id: string;
      nom: string;
      email: string;
      role: string;
      createdAt: string;
    } | null;
    recentTickets: Array<{
      id: string;
      titre: string;
      description: string;
      statut: string;
      priorite: string;
      dateCreation: string;
      dateMiseAJour: string;
    }>;
    error: string | null;
  }>();

  const { user, recentTickets, error } = data || {};

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Card className="border-red-300">
          <CardHeader>
            <CardTitle>Erreur</CardTitle>
            <CardDescription>
              Une erreur s'est produite lors du chargement des données.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
          <CardFooter>
            <Link href="/">
              <Button variant="outline">Retour à l'accueil</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Profil non disponible</CardTitle>
            <CardDescription>
              Aucun utilisateur n'est actuellement connecté.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Veuillez vous connecter pour accéder à votre profil.</p>
          </CardContent>
          <CardFooter>
            <Link href="/auth">
              <Button>Se connecter</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carte principale du profil */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Mon Profil</CardTitle>
              <CardDescription>Vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">              <div className="w-32 h-32 mx-auto rounded-full bg-[#1A79B5] text-white flex items-center justify-center text-4xl font-bold">
                {user.nom.charAt(0)}
              </div>
              
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{user.nom}</h2>
                <p className="text-gray-600">{user.email}</p>
                <div className="mt-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getRoleBadgeClass(user.role)}`}>
                    {user.role}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Membre depuis</span>
                  <span>{formatDate(user.createdAt)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Modifier le profil</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Tickets récents */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Tickets Récents</CardTitle>
              <CardDescription>Les derniers tickets que vous avez créés</CardDescription>
            </CardHeader>
            <CardContent>
              {recentTickets && recentTickets.length > 0 ? (
                <div className="space-y-4">
                  {recentTickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{ticket.titre}</h3>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(ticket.statut)}`}>
                            {ticket.statut}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityClass(ticket.priorite)}`}>
                            {ticket.priorite}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{ticket.description}</p>
                      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                        <span>Créé le {formatDate(ticket.dateCreation)}</span>
                        <Link href={`/tickets/${ticket.id}`}>
                          <Button size="sm" variant="outline">Voir le ticket</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Vous n'avez pas encore créé de tickets.</p>
                  <Link href="/tickets/new">
                    <Button className="mt-4">Créer un ticket</Button>
                  </Link>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Link href="/tickets" className="w-full">
                <Button variant="outline" className="w-full">Voir tous mes tickets</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
