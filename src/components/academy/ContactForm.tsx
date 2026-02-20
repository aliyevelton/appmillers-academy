import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AREA_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Full-stack Development",
  "Data Science",
  "UI/UX Design",
  "Digər",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your backend or email service
    console.log({ name, phone, email, area });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl flex flex-col lg:flex-row">
          {/* Left panel - same dark background + grid as "Karyeranı planla" */}
          <div className="lg:w-[42%] bg-dark p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--dark-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dark-foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-black text-dark-foreground mb-4 leading-tight">
                Gələcəyinizi bu gün qurun.
              </h2>
              <p className="text-dark-muted text-sm lg:text-base leading-relaxed">
                Formanı doldurun, tədris mütəxəssislərimiz sizə zəng edərək karyera planlamanızda kömək etsinlər.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 space-y-4 relative z-10">
              <a
                href="tel:+994501234567"
                className="flex items-center gap-3 text-dark-foreground text-sm hover:opacity-90 transition-opacity"
              >
                <span className="w-10 h-10 rounded-lg bg-dark-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                +994 50 123 45 67
              </a>
              <div className="flex items-center gap-3 text-dark-foreground text-sm">
                <span className="w-10 h-10 rounded-lg bg-dark-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <span>Bakı şəhəri, Nizami küç. 14</span>
              </div>
              <a
                href="mailto:info@appmillers.az"
                className="flex items-center gap-3 text-dark-foreground text-sm hover:opacity-90 transition-opacity"
              >
                <span className="w-10 h-10 rounded-lg bg-dark-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                info@appmillers.az
              </a>
            </div>
          </div>

          {/* Right panel - form */}
          <div className="lg:w-[58%] bg-background p-8 lg:p-10 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Ad və Soyad
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınızı daxil edin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border-border h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Telefon Nömrəsi
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="050 000 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-lg border-border h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border-border h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area" className="text-foreground font-medium">
                  Maraqlandığınız Sahə
                </Label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger id="area" className="rounded-lg border-border h-11">
                    <SelectValue placeholder="Sahə seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {AREA_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-colors"
                >
                  Sizə zəng edək
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
