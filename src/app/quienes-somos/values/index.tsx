import { gallery } from "./gallery/data";
import { GalleryItem } from "./gallery";
import { PrimaValues } from "./prima-values";

export const GalleryValues = () => {
  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {gallery.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
          <PrimaValues />
        </div>
      </div>
    </section>
  );
};
