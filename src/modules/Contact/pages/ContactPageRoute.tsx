import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ContactPage from "./ContactPage";

export default function ContactPageRoute() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ContactPage />
    </QueryClientProvider>
  );
}
