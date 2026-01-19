export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
      neutral: "neutral",
    },
    navigationMenu: {
      variants: {
        active: {
          true: {
            childLink: 'before:bg-transparent',
          },
        },
      },
      compoundVariants: [
        {
          disabled: false,
          active: false,
          variant: "pill",
          class: {
            link: [
              "hover:text-primary hover:before:bg-transparent",
            ],
          },
        },
      ],
    },
    input: {
      defaultVariants: {
        size: "xl",
      },
    },
    select: {
      defaultVariants: {
        size: "xl",
      },
    },
    textarea: {
      defaultVariants: {
        size: "xl",
      },
    },
    button: {
      defaultVariants: {
        size: "xl",
      },
    },
    header: {
      slots: {
        root: "py-10",
      },
    },
  },
});
