import { Brain, ArrowRight, MessageSquare, TrendingUp, Database, GraduationCap, BookOpen, Warehouse } from "lucide-react";

const SlideDadosDiferencial = () => {
  return (
    <div className="slide network-bg">
      <div className="particles" />

      <div className="slide-content relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 opacity-0 animate-fade-in-up">
            O <span className="text-gradient-magenta">Diferencial</span> dos Dados
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* IA genérica */}
          <div className="opacity-0 animate-fade-in-up delay-100">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-1">IA Generativa genérica</h3>
              <p className="text-muted-foreground">Não conhece <span className="text-primary font-medium">sua instituição</span></p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4 mb-4 h-[72px] flex items-center">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <p className="text-foreground text-sm">"Quais são as melhores práticas para reduzir a evasão escolar?"</p>
              </div>
            </div>
            <div className="card-glass p-6 rounded-xl h-[200px] flex flex-col items-center justify-center">
              <Brain className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-sm text-center">Respostas genéricas baseadas em conhecimento público</p>
            </div>
          </div>

          {/* Seta central */}
          <div className="hidden md:flex items-center justify-center h-full opacity-0 animate-fade-in delay-200">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-nuage-cyan flex items-center justify-center shadow-lg shadow-primary/30">
              <ArrowRight className="w-7 h-7 text-foreground" />
            </div>
          </div>

          {/* IA que conhece sua instituição */}
          <div className="opacity-0 animate-fade-in-up delay-300">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-1">IA Generativa que conhece a sua instituição</h3>
              <p className="text-muted-foreground">Sabe sobre <span className="text-nuage-cyan font-medium">seus alunos, cursos e operações</span></p>
            </div>
            <div className="bg-primary rounded-xl p-4 mb-4 h-[72px] flex items-center">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-foreground flex-shrink-0" />
                <p className="text-foreground text-sm">"Qual a taxa de evasão dos últimos 3 semestres e quais cursos têm maior risco de abandono?"</p>
              </div>
            </div>
            <div className="card-glass p-6 rounded-xl h-[200px] border border-nuage-cyan/30 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-nuage-cyan/10 rounded-lg p-3 flex flex-col items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-nuage-cyan mb-2" />
                  <span className="text-sm text-muted-foreground">Matrículas</span>
                </div>
                <div className="bg-nuage-gold/10 rounded-lg p-3 flex flex-col items-center justify-center">
                  <BookOpen className="w-8 h-8 text-nuage-gold mb-2" />
                  <span className="text-sm text-muted-foreground">Desempenho</span>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 flex flex-col items-center justify-center">
                  <Database className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Data Lake</span>
                </div>
                <div className="bg-nuage-cyan/10 rounded-lg p-3 flex flex-col items-center justify-center">
                  <Warehouse className="w-8 h-8 text-nuage-cyan mb-2" />
                  <span className="text-sm text-muted-foreground">Data Warehouse</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 opacity-0 animate-fade-in-up delay-400 text-center">
          <div className="inline-block">
            <span className="bg-nuage-gold px-4 py-2 text-background font-bold text-sm rounded-lg">A Pergunta-Chave:</span>
          </div>
          <p className="text-xl mt-4 text-muted-foreground">
            Como conectar o poder dos FMs aos <span className="bg-nuage-gold/20 px-3 py-1 rounded-lg text-nuage-gold font-medium">meus dados</span> — 
            no <span className="text-nuage-cyan font-semibold">Data Lake</span> ou <span className="text-primary font-semibold">Data Warehouse</span> — 
            de forma segura, privada e eficaz?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideDadosDiferencial;
