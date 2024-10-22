interface ScrollButtonsProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  mainRef: React.
  servicesMovelRef: React.RefObject<HTMLDivElement>;
  beneficiosRef: React.RefObject<HTMLDivElement>;
  servicesFibraRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
}

const ScrollToMovel: React.FC<ScrollButtonsProps> = ({
  scrollToSection,
  servicesMovelRef,
}) => {
  return (
    <div className="fixed top-0 right-0 m-4">
      <button
        onClick={() => scrollToSection(servicesMovelRef)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Ir para Serviços Móvel
      </button>
    </div>
  );
};

export default ScrollToMovel;
