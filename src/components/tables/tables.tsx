import SideTableCard from "./Sidetablecard";

export default function SideTableSection() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FDF9F9] p-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Card 1 */}
        <SideTableCard
          imageSrc="/table-image.png"
          title="Side table"
        />

        {/* Card 2 */}
        <SideTableCard
          imageSrc="/sofa-image.png"
          title="Side table"
        />
      </div>
    </main>
  );
}
