import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Especialidades from '@/components/Especialidades';
import Equipe from '@/components/Equipe';
import Estrutura from '@/components/Estrutura';
import Depoimentos from '@/components/Depoimentos';
import Planos from '@/components/Planos';
import FAQ from '@/components/FAQ';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 pointer-events-none">
        <div className="mx-auto md:w-[80%] lg:w-[70%] w-[92%] pointer-events-auto">
          <Navbar />
        </div>
      </div>
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <Equipe />
        <Estrutura />
        <Depoimentos />
        <Planos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
