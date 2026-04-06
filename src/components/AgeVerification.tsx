import { Shield } from "lucide-react";

interface AgeVerificationProps {
  onConfirm: () => void;
  onDeny: () => void;
}

const AgeVerification = ({ onConfirm, onDeny }: AgeVerificationProps) => {
  return (
    <div className="fixed inset-0 bg-background/95 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-secondary to-background border border-primary/50 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl glow-primary">
        <div className="flex justify-center mb-6">
          <div className="gradient-primary p-3 rounded-full">
            <Shield className="w-8 h-8 text-background" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Verificação de Idade
        </h2>
        <p className="text-muted-foreground mb-6">
          Este conteúdo é destinado apenas para maiores de 18 anos. Você confirma que tem 18 anos ou mais?
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            onClick={onConfirm}
            className="flex-1 gradient-primary hover:opacity-90 text-background py-3 px-6 rounded-lg transition-opacity font-semibold"
          >
            Sim, continuar
          </button>
          <button
            onClick={onDeny}
            className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground py-3 px-6 rounded-lg transition-colors font-medium"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
