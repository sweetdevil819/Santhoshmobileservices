import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutRajesh } from './components/AboutRajesh';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';
import { ServiceItem, ReviewItem } from './types';

const REVIEWS_STORAGE_KEY = 'mobile_melodies_customer_reviews_v1';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledArea, setPrefilledArea] = useState<string>('');
  
  // Real customer reviews with photo support, persisted in localStorage
  const [userReviews, setUserReviews] = useState<ReviewItem[]>(() => {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not read saved reviews:', e);
      return [];
    }
  });

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleAreaSelectForBooking = (areaName: string) => {
    setPrefilledArea(areaName);
    setIsBookingOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setUserReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save review to localStorage:', e);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4 Trust Highlights Bar */}
        <TrustBar />

        {/* Our Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* How It Works (4 steps) */}
        <HowItWorks />

        {/* 3-Column Section: About Santhosh Kumar | Service Area | Customer Reviews */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Column 1: About Santhosh Kumar / Mobile_Melodies */}
              <div className="h-full">
                <AboutRajesh onOpenBooking={() => handleOpenBooking()} />
              </div>

              {/* Column 2: Our Service Area (Bhimavaram) */}
              <div className="h-full">
                <ServiceAreaChecker onSelectAreaForBooking={handleAreaSelectForBooking} />
              </div>

              {/* Column 3: Real Customer Reviews */}
              <div className="h-full">
                <CustomerReviews
                  onOpenReviewModal={() => setIsReviewModalOpen(true)}
                  customReviews={userReviews}
                />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Bar for Mobile View */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedService(null);
          setPrefilledArea('');
        }}
        selectedService={selectedService}
        prefilledArea={prefilledArea}
      />

      {/* Interactive Review Modal with optional Photo Upload */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
