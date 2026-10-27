export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  estimatedPrice: string;
  duration: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  initial: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  avatarColor?: string;
  photoUrl?: string; // Optional picture attached by customer
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  deviceBrand: string;
  deviceModel: string;
  area: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
