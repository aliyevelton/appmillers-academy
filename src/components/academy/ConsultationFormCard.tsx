import { useState } from "react";
import { Phone, Mail, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const PROGRAM_OPTIONS = [
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "data-ai", label: "Data & AI" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "other", label: "Digər" },
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
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProgram) return;
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
            {step === 1 ? "Proqramı seçin." : "Karyeranı birlikdə planlayaq."}
          </h2>
          <p className="text-dark-muted text-sm lg:text-base leading-relaxed">
            {step === 1
              ? "Maraqlandığınız sahəni seçin, sonra əlaqə məlumatlarınızı daxil edin."
              : "Ad, soyad, telefon və email qeyd edin — sizə zəng edib proqramlar haqqında məlumat verəcəyik."}
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

      {/* Right panel - step 1: choice / step 2: form */}
      <div className="lg:w-[58%] bg-background p-8 lg:p-10 flex flex-col justify-center">
        {step === 1 ? (
          <>
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Maraqlandığınız proqramı seçin
            </p>
            <div className="space-y-3">
              {PROGRAM_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedProgram(opt.id)}
                  className={`w-full flex items-center justify-between gap-3 rounded-xl border-2 px-5 py-4 text-left font-medium transition-all ${
                    selectedProgram === opt.id
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-surface"
                  }`}
                >
                  <span>{opt.label}</span>
                  {selectedProgram === opt.id && (
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="pt-6">
              <Button
                type="button"
                disabled={!selectedProgram}
                onClick={() => setStep(2)}
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base border-2 border-transparent hover:bg-background hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                Davam et
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {selectedProgram && (
              <div className="flex items-center justify-between rounded-xl bg-surface border border-border px-4 py-3">
                <span className="text-sm text-muted-foreground">Seçildi:</span>
                <span className="text-sm font-semibold text-foreground">
                  {PROGRAM_OPTIONS.find((o) => o.id === selectedProgram)?.label}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Dəyiş
                </button>
              </div>
            )}
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
        )}
        {step === 2 && (
          <p className="mt-6 text-xs text-muted-foreground text-center">
            Müraciətiniz qısa müddətdə nəzərdən keçiriləcək.
          </p>
        )}
      </div>
    </div>
  );
}
