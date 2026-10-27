import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'display-screen',
    title: 'Display / Screen Replacement',
    iconName: 'Smartphone',
    description: 'Cracked screen, touch not working, blank screen or display lines fixed with genuine quality screens at your home.',
    estimatedPrice: 'From ₹1,199',
    duration: '25 - 40 Mins',
    popular: true
  },
  {
    id: 'battery',
    title: 'Battery Replacement',
    iconName: 'BatteryCharging',
    description: 'Fast battery draining, phone shutting down, swelling battery, or low backup fixed with tested high-capacity batteries.',
    estimatedPrice: 'From ₹899',
    duration: '20 - 30 Mins',
    popular: true
  },
  {
    id: 'charging-port',
    title: 'Charging Port Repair',
    iconName: 'Cable',
    description: 'Loose charging connector, slow charging, moisture detected, or phone not charging at all repaired on the spot.',
    estimatedPrice: 'From ₹599',
    duration: '25 - 35 Mins',
    popular: true
  },
  {
    id: 'speaker-mic',
    title: 'Speaker / Microphone Repair',
    iconName: 'Volume2',
    description: 'Low call volume, crackling speaker, other person cannot hear you during calls, or buzzer replacement.',
    estimatedPrice: 'From ₹649',
    duration: '25 - 35 Mins'
  },
  {
    id: 'camera',
    title: 'Camera Repair',
    iconName: 'Camera',
    description: 'Blurry camera lens, black camera screen, broken camera glass protector, or front selfie camera repair.',
    estimatedPrice: 'From ₹799',
    duration: '30 - 45 Mins'
  },
  {
    id: 'software',
    title: 'Software Problems',
    iconName: 'Code',
    description: 'Bootloop / stuck on logo, OS crash, factory reset, software upgrade, slow performance and unlocking support.',
    estimatedPrice: 'From ₹499',
    duration: '30 - 60 Mins'
  },
  {
    id: 'power-button',
    title: 'Power Button Problems',
    iconName: 'Power',
    description: 'Stuck power button, unresponsive volume keys, loose flex cable, or fingerprint sensor issues fixed at home.',
    estimatedPrice: 'From ₹549',
    duration: '20 - 35 Mins'
  },
  {
    id: 'water-damage',
    title: 'Water Damage Repair',
    iconName: 'Droplets',
    description: 'Quick ultrasonic cleaning, board drying, short-circuit diagnostics and IC repair for liquid-damaged phones.',
    estimatedPrice: 'From ₹899',
    duration: '45 - 90 Mins'
  },
  {
    id: 'network-signal',
    title: 'Network / Signal Problems',
    iconName: 'Signal',
    description: 'No SIM card detected, fluctuating 4G/5G signals, Wi-Fi not connecting, or antenna flex cable issues.',
    estimatedPrice: 'From ₹699',
    duration: '30 - 50 Mins'
  },
  {
    id: 'other-problems',
    title: 'Other Mobile Problems',
    iconName: 'Settings',
    description: 'Back glass replacement, motherboard issues, heating problem, vibration motor or diagnostic check.',
    estimatedPrice: 'Quote on Check',
    duration: '30 - 60 Mins'
  }
];

export const MOBILE_BRANDS = [
  'Apple iPhone',
  'Samsung',
  'OnePlus',
  'Xiaomi / Redmi / Poco',
  'Vivo',
  'Oppo',
  'Realme',
  'Google Pixel',
  'Motorola',
  'Nothing Phone',
  'iQOO',
  'Other Brand'
];
