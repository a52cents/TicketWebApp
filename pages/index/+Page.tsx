import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mt-6 mb-4">
          Bienvenue sur votre Système de Gestion de Tickets
        </h1>
        <p className="text-xl text-gray-600">
          Une solution simple et efficace pour gérer vos demandes de support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Création de Tickets</CardTitle>
            <CardDescription>Soumettez vos demandes facilement</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Créez des tickets détaillés avec titre, description, et niveau de
              priorité pour communiquer clairement vos besoins au service
              support.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/tickets/new" className="contents">
              <Button size="sm">Créer un ticket</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suivi en Temps Réel</CardTitle>
            <CardDescription>
              Restez informé de l'état de vos demandes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Suivez l'évolution de vos tickets en temps réel avec des statuts
              clairement définis : Nouveau, En cours, Résolu ou Fermé.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/tickets" className="contents">
              <Button size="sm" variant="secondary">
                Voir tous les tickets
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communication Simplifiée</CardTitle>
            <CardDescription>
              Échangez directement avec l'équipe support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Ajoutez des commentaires à vos tickets pour fournir des
              informations complémentaires et dialoguer avec les agents qui
              traitent votre demande.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Pour les utilisateurs
            </h3>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Créez un compte ou connectez-vous</li>
              <li>Soumettez un nouveau ticket en décrivant votre problème</li>
              <li>
                Suivez la progression et répondez aux demandes d'informations
              </li>
              <li>
                Recevez une notification lorsque votre problème est résolu
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Pour les agents</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Accédez au tableau de bord des tickets</li>
              <li>Triez et filtrez les demandes par priorité ou statut</li>
              <li>Traitez les tickets en mettant à jour leur statut</li>
              <li>Communiquez avec les utilisateurs via les commentaires</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Avantages clés</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interface intuitive et facile à utiliser</li>
              <li>Organisation efficace des demandes de support</li>
              <li>Réduction des temps de réponse</li>
              <li>Historique complet des interactions</li>
              <li>Attribution claire des responsabilités</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Commencer maintenant</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Prêt à améliorer la gestion de vos demandes de support ?
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Link href="/auth" className="contents">
                  <Button variant="default">S'inscrire / Se connecter</Button>
                </Link>
                <Link href="/tickets/new" className="contents">
                  <Button variant="secondary">Créer un ticket</Button>
                </Link>
              </div>
              <Link href="/tickets" className="contents">
                <Button variant="outline" className="mt-2 w-full">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-list"
                    >
                      <line x1="8" x2="21" y1="6" y2="6" />
                      <line x1="8" x2="21" y1="12" y2="12" />
                      <line x1="8" x2="21" y1="18" y2="18" />
                      <line x1="3" x2="3.01" y1="6" y2="6" />
                      <line x1="3" x2="3.01" y1="12" y2="12" />
                      <line x1="3" x2="3.01" y1="18" y2="18" />
                    </svg>
                    VOIR TOUS LES TICKETS
                  </span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
