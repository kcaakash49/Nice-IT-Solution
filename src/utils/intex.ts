//Products for FTTH Section
type Product = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };

export const products: Product[] = [
    {
      id: "fiber-optic-cable",
      title: "Fiber Optic Cable",
      description:
        "High-bandwidth fiber cables for long-distance, low-loss data transmission.",
      imageUrl:
        "/ftthProductImage/fibercable.webp",
    },
    {
      id: "patch-cable",
      title: "Patch Cable",
      description:
        "Flexible patch cables for internal connections and easy routing.",
      imageUrl:
        "/ftthProductImage/patchcable.webp",
    },
    {
      id: "drop-wire",
      title: "Drop Wire",
      description:
        "Weather-resistant drop wire for connecting end users to the main fiber line.",
      imageUrl:
        "/ftthProductImage/dropcable.webp",
    },
    {
      id: "router",
      title: "Router",
      description:
        "Reliable routers to distribute FTTH connectivity across your local network.",
      imageUrl:
        "/ftthProductImage/router.webp",
    },
    {
      id: "switch",
      title: "Switch",
      description:
        "Managed and unmanaged switches for scaling and segmenting your infrastructure.",
      imageUrl:
        "/ftthProductImage/switch.webp",
    },
  ];