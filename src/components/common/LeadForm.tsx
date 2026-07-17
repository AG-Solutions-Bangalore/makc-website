import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

const leadSchema = z.object({
  phone: z.string().min(8, "Valid phone number is required"),
  city: z.string().min(2, "City name must be at least 2 characters"),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  toastMessage?: string;
}

export default function LeadForm({
  title = "Request Consultation",
  subtitle = "Connect with our design engineers to plan your space.",
  buttonText = "Book a Free Smart Home Consultation",
  toastMessage = "Consultation requested successfully!",
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    // Simulate API Submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Lead Form Submitted: ", data);
    toast.success(toastMessage);
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-bg-surface/50 backdrop-blur-xl border border-border-main rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-lg">
      <h3 className="text-xl font-serif font-bold text-text-main mb-2">{title}</h3>
      <p className="text-xs text-text-muted mb-5">{subtitle}</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5">Phone Number</label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="+91-90000-00000"
              className="w-full bg-bg-main/60 border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3 text-text-main transition-all outline-none text-sm shadow-inner"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          
          <div>
            <label htmlFor="city" className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5">Your City</label>
            <input
              {...register("city")}
              type="text"
              id="city"
              placeholder="e.g. Bangalore"
              className="w-full bg-bg-main/60 border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3 text-text-main transition-all outline-none text-sm shadow-inner"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 cursor-pointer bg-accent-blue hover:bg-[#0055d4] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all duration-300 flex justify-center items-center shadow-[0_4px_20px_rgba(10,132,255,0.3)] hover:shadow-[0_8px_30px_rgba(10,132,255,0.5)] hover:-translate-y-0.5"
        >
          {isSubmitting ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : buttonText}
        </button>
      </form>
    </div>
  );
}
