import { useState, useRef, useEffect } from "react";
import { Phone, Mail, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const PROGRAM_OPTIONS = [
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "data-ai", label: "Data & AI" },
  { id: "cybersecurity", label: "Cybersecurity" }
];

export type ConsultationFormData = {
  selectedProgram: string;
  ad: string;
  soyad: string;
  telefon: string;
  email: string;
};

type ConsultationFormCardProps = {
  onSubmit?: (data: ConsultationFormData) => void;
};

export default function ConsultationFormCard({ onSubmit }: ConsultationFormCardProps) {
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProgram) {
      setDropdownOpen(true);
      return;
    }
    const data: ConsultationFormData = { selectedProgram, ad, soyad, telefon, email };
    onSubmit?.(data);
    console.log(data); // TODO: remove when backend connected
  };

  return (
    <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl flex flex-col lg:flex-row">
      {/* Left panel - dark */}
      <div className="lg:w-[42%] bg-dark p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--dark-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dark-foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-2xl lg:text-3xl font-black text-dark-foreground mb-4 leading-tight">
            Karyeranı birlikdə planlayaq.
          </h2>
          <p className="text-dark-muted text-sm lg:text-base leading-relaxed">
            Formanı doldurun — tədris mütəxəssislərimiz sizinlə əlaqə saxlayıb
            suallarınıza cavab verəcək.
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

      {/* Right panel - single form */}
      <div className="lg:w-[58%] bg-background p-8 lg:p-10 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Program selection - custom dropdown (card style) */}
          <div className="space-y-2" ref={dropdownRef}>
            <Label className="text-foreground font-medium">
              Maraqlandığınız proqram
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((o) => !o)}
                className={`w-full flex items-center justify-between gap-3 rounded-xl border-2 px-5 py-4 text-left font-medium transition-all ${
                  selectedProgram
                    ? "border-primary bg-primary-light text-primary"
                    : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-surface"
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                aria-label="Proqramı seçin"
              >
                <span>
                  {selectedProgram
                    ? PROGRAM_OPTIONS.find((o) => o.id === selectedProgram)?.label
                    : "Proqramı seçin"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 z-20 mt-2 space-y-2 rounded-xl border border-border bg-background p-2 shadow-lg"
                  role="listbox"
                >
                  {PROGRAM_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="option"
                      aria-selected={selectedProgram === opt.id}
                      onClick={() => {
                        setSelectedProgram(opt.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 rounded-xl border-2 px-5 py-3.5 text-left font-medium transition-all ${
                        selectedProgram === opt.id
                          ? "border-primary bg-primary-light text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-surface"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {selectedProgram === opt.id && (
                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ad" className="text-foreground font-medium">
                Ad
              </Label>
              <Input
                id="ad"
                type="text"
                placeholder="Adınız"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
                className="rounded-xl border-border h-12 bg-background"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="soyad" className="text-foreground font-medium">
                Soyad
              </Label>
              <Input
                id="soyad"
                type="text"
                placeholder="Soyadınız"
                value={soyad}
                onChange={(e) => setSoyad(e.target.value)}
                className="rounded-xl border-border h-12 bg-background"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefon" className="text-foreground font-medium">
              Telefon nömrəsi
            </Label>
            <Input
              id="telefon"
              type="tel"
              placeholder="050 000 00 00"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              className="rounded-xl border-border h-12 bg-background"
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
              className="rounded-xl border-border h-12 bg-background"
              required
            />
          </div>
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base border-2 border-transparent hover:bg-background hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              Göndər
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
