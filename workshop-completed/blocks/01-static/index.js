const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("jsforwpworkshop/static", {
  title: __("Workshop - Static", "jsforwpworkshop"),
  description: __(
    "Demonstration of how to make a static call to action block.",
    "jsforwpworkshop"
  ),
  category: "common",
  icon: {
    background: "yellow",
    src: "megaphone"
  },
  keywords: [__("Banner CTA Shoutout", "jsforwpworkshop")],
  edit: props => {
    return (
      <h3 className={props.className}>{__("Static", "jsforwpworkshop")}</h3>
    );
  },
  save: props => {
    return <h3>{__("Static", "jsforwpworkshop")}</h3>;
  }
});
