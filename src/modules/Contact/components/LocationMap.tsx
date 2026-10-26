// Real Google Maps embed for MAKc AUTOMATION AND SOLUTIONS LLP at coordinates 12.9617597, 77.7205084
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.192070381404!2d77.7179335!3d12.9617597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13f2409f2923%3A0x28050402cd5a55ed!2sMAKc%20AUTOMATION%20AND%20SOLUTIONS%20LLP%20-%20Home%20Automation%20Company!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

export function LocationMap() {
  return (
    <div
      className="mt-6 lg:mt-8 relative h-[280px] sm:h-[320px] lg:h-[380px] w-full rounded-3xl overflow-hidden border border-border-main/70 shadow-2xl group reveal-on-scroll reveal-up"
      data-reveal-duration="0.8s"
    >
      <iframe
        src={EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MAKc AUTOMATION AND SOLUTIONS LLP — Home Automation Company, Brookefield, Bengaluru"
        className="w-full h-full filter dark:grayscale dark:invert-[92%] dark:contrast-[83%] transition-all duration-500"
      />
    </div>
  );
}
