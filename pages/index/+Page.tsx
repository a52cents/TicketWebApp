import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <div className="flex gap-4">
              <a
                href="/auth"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                S'inscrire / Se connecter
              </a>
              <a
                href="/tickets/new"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Créer un ticket
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
