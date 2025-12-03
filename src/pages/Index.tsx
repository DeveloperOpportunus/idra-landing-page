import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Especialidades from '@/components/Especialidades';
import Equipe from '@/components/Equipe';
import Estrutura from '@/components/Estrutura';
import Depoimentos from '@/components/Depoimentos';
import FAQ from '@/components/FAQ';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Hero />
        <Sobre />
        <Especialidades />
        <Equipe />
        <Estrutura />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
