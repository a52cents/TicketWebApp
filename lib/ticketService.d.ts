// Type definitions for ticketService.js

interface TicketData {
  id?: string;
  titre: string;
  description?: string;
  priorite?: "BASSE" | "MOYENNE" | "HAUTE";
  statut?: string;
}

interface Ticket extends TicketData {
  id: string;
  dateCreation: Date;
  dateMiseAJour: Date;
  utilisateurId: string | null;
}

interface TicketService {
  createTicket(
    ticketData: TicketData,
    utilisateurId?: string | null
  ): Promise<Ticket>;
  getAllTickets(): Promise<Ticket[]>;
  getTicketById(id: string): Promise<Ticket | null>;
  updateTicket(id: string, updateData: Partial<TicketData>): Promise<Ticket>;
  deleteTicket(id: string): Promise<Ticket>;
}

declare const _default: TicketService;
export default _default;
