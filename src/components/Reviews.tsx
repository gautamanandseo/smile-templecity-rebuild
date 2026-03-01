import { Star } from "lucide-react";

const reviews = [
  {
    text: "I have been to several dentist in my lifetime and some of the procedures Dr. Lad used are some of the most advanced I have ever seen. The attention and service from the entire staff at Lad Family Dentistry is also among the highest.",
    name: "Satisfied Patient",
    source: "Google Review",
  },
  {
    text: "Very professional, very clean, very organized. Will take time to make sure that you are comfortable. Plus there are lovely outdoor gardens that patients can observe while getting their teeth cleaned.",
    name: "Verified Patient",
    source: "Yelp Review",
  },
  {
    text: "Dr. Sunjay Lad is professional, thorough, and efficient. He talks through the different options for care with me and is honest about what needs to be taken care of in the short term versus what we can wait to deal with later.",
    name: "Returning Patient",
    source: "Google Review",
  },
  {
    text: "I had bad teeth and they were causing nerve and tooth pain. One night I decided I could not stand it any longer. I called that night and got an appointment for the next day. I was impressed... I will stay with Lad Family Dentistry.",
    name: "Emergency Patient",
    source: "Google Review",
  },
];

const Reviews = () => (
  <section id="reviews" className="bg-primary py-16 md:py-24 relative overflow-hidden">
    {/* decorative swirl */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-gold to-teal opacity-10 rounded-full animate-blob" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-foreground mb-4">
          What Temple City Patients Say
        </h2>
        <p className="text-primary-foreground/70 text-lg">
          Read our reviews on Google, Yelp, and Healthgrades
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-navy-light rounded-xl p-6 animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-primary-foreground/90 text-base mb-4 leading-relaxed">"{r.text}"</p>
            <p className="text-gold font-bold">— {r.name}</p>
            <p className="text-primary-foreground/60 text-sm">⭐ {r.source}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gold text-xl font-bold">
          4.9 ★ Average Rating · Hundreds of Reviews Across Google & Yelp
        </p>
      </div>
    </div>
  </section>
);

export default Reviews;
