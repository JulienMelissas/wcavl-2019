const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("jsforwpworkshop/dynamic", {
  title: __("Workshop - Dynamic", "jsforwpworkshop"),
  description: __(
    "Demonstration of how to make a block with dynamic content using attributes.",
    "jsforwpworkshop"
  ),
  category: "common",
  icon: {
    background: "yellow",
    src: "edit"
  },
  keywords: [__("Editable Header", "jsforwpworkshop")],
  attributes: {
    title: {
      type: "string",
      default: "Enter a title"
    }
  },
  edit: props => {
    const {
      className,
      setAttributes,
      isSelected,
      attributes: { title }
    } = props;
    return (
      <h3 className={className}>
        {isSelected ? (
          <input
            name="dynamic-title"
            value={title}
            onChange={event => {
              setAttributes({ title: event.target.value });
            }}
          />
        ) : (
          title
        )}
      </h3>
    );
  },
  save: props => {
    const {
      attributes: { title }
    } = props;
    return <h3>{title}</h3>;
  }
});
