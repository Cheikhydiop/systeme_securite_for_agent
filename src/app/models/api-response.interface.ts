export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  status: number;
  error?: any;
  data: T;
  token:any // This should contain wallets and user
}


export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  photo: string | null;
}


export interface WalletResponse {
  wallets: {
      id: string;
      userId: string;
      currency: string;
      balance: string | number;
      createdAt: string;  // La réponse API envoie une chaîne
      updatedAt: string;  // La réponse API envoie une chaîne
      isActive: boolean;
      plafond: string | number;
      qrCode: string;
      dailyLimit?: string | number;
      monthlyLimit?: string | number;
  }[];
  user: User | null;
}


