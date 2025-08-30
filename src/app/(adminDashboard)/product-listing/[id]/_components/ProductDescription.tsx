import React from "react";

export default function ProductDescription() {
  return (
    <div className="text-foreground">
      <h1 className="text-2xl font-semibold text-muted-foreground mb-6">
        Description
      </h1>

      <p className="text-muted-foreground leading-relaxed">
        The Heart Ruffled Sweatshirt is a perfect blend of comfort, style, and
        personality. Crafted from a soft cotton blend, this cozy sweatshirt is
        designed to keep you feeling warm and stylish, whether you're lounging
        at home or out and about. The standout feature of this sweatshirt is the
        playful ruffled heart design on the front, which adds a charming and
        feminine touch to an otherwise classic wardrobe staple.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-muted-foreground">
          Key Features:
        </h2>

        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <div>
              <strong className="text-foreground">Material:</strong> Made with a
              high-quality cotton blend, this sweatshirt provides a perfect
              balance of softness and breathability. It's durable yet
              comfortable, ensuring you stay cozy all day.
            </div>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <div>
              <strong className="text-foreground">Unique Design:</strong> The
              ruffled heart detail on the chest gives this sweatshirt a modern
              and fun twist. It's perfect for those who want to add a bit of
              whimsy to their everyday wardrobe without compromising on comfort.
            </div>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <div>
              <strong className="text-foreground">Fit:</strong> Designed in a
              relaxed fit with long sleeves and a crew neckline, it offers a
              flattering and easy-going silhouette. Whether you're layering it
              over a tee or wearing it on its own, this sweatshirt gives you
              room to move while still looking great.
            </div>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <div>
              <strong className="text-foreground">Versatile Style:</strong>{" "}
              Available in a dark grey shade, this piece can easily be paired
              with jeans, leggings, or skirts for a casual, laid-back look.
              Dress it up with your favorite accessories or keep it casual for a
              day out with friends.
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-muted-foreground">
          Care Instructions:
        </h2>

        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <span>Machine wash cold to maintain fabric quality.</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <span>
              Tumble dry low or hang to dry to preserve the shape and ruffle
              details.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-foreground mt-1">•</span>
            <span>Do not bleach to maintain the color integrity.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
