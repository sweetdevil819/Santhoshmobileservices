import React, { useState } from 'react';
import { MessageSquarePlus, CheckCircle2, Camera, X } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';
import { ReviewItem } from '../types';

interface CustomerReviewsProps {
  onOpenReviewModal: () => void;
  customReviews?: ReviewItem[];
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  onOpenReviewModal,
  customReviews = [],
}) => {
  const allReviews = [...customReviews, ...REVIEWS];
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Dynamic rating summary based on real submitted reviews
  const avgRating = allReviews.length > 0
    ? (allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length).toFixed(1)
    : '5.0';

  return (
    <div id="reviews" className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Customer Reviews</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Real reviews &amp; pictures by verified customers
            </p>
          </div>
          <button
            onClick={onOpenReviewModal}
            className="text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Add Review</span>
          </button>
        </div>

        {/* Rating Summary Header */}
        <div className="flex items-center gap-3 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 mb-4">
          <div className="text-2xl font-black text-amber-600 leading-none">
            {avgRating}
          </div>
          <div className="flex-1">
            <div className="flex items-center text-amber-500 text-sm">
              {'★'.repeat(5)}
            </div>
            <div className="text-[11px] text-slate-600 font-medium">
              {allReviews.length > 0
                ? `${allReviews.length} real verified customer ${allReviews.length === 1 ? 'review' : 'reviews'}`
                : '100% Genuine reviews from real customers in Bhimavaram'}
            </div>
          </div>
          <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified</span>
          </div>
        </div>

        {/* Reviews List OR Empty State */}
        {allReviews.length === 0 ? (
          <div className="bg-slate-50/80 border border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                Be the First to Add a Review!
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                Had your phone repaired by Santhosh Kumar / Mobile_Melodies? Share your experience and add photos of your repaired device.
              </p>
            </div>
            <button
              onClick={onOpenReviewModal}
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Real Review + Add Photo</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
            {allReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 hover:border-slate-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        rev.avatarColor || 'bg-indigo-600'
                      } text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {rev.initial}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 leading-tight">
                        {rev.name}
                      </h5>
                      <div className="flex items-center text-amber-400 text-xs">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Customer Photo Attachment (if customer opted to upload one) */}
                {rev.photoUrl && (
                  <div className="mt-2.5">
                    <div
                      onClick={() => setSelectedPhoto(rev.photoUrl || null)}
                      className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer group max-w-[200px]"
                    >
                      <img
                        src={rev.photoUrl}
                        alt={`Photo attached by ${rev.name}`}
                        className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute bottom-1 right-1 bg-slate-900/80 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold flex items-center gap-1 backdrop-blur-xs">
                        <Camera className="w-2.5 h-2.5" />
                        <span>Customer Photo</span>
                      </div>
                    </div>
                  </div>
                )}

                {rev.location && (
                  <div className="mt-2 text-[10px] text-slate-400 font-medium">
                    📍 {rev.location}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* WhatsApp Feedback CTA */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 text-[11px]">Repaired by Santhosh Kumar?</span>
        <button
          onClick={onOpenReviewModal}
          className="text-indigo-600 hover:text-indigo-800 font-bold underline cursor-pointer"
        >
          Add Your Review
        </button>
      </div>

      {/* Full Screen Image Lightbox Modal if user clicks on a review photo */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-xl max-h-[85vh] bg-slate-950 rounded-2xl overflow-hidden border border-white/20 p-2">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="Customer repair full size view"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
