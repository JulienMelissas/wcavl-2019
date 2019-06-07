const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
const { RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("jsforwpworkshop/components", {
  title: __("Workshop - Components", "jsforwpworkshop"),
  description: __(
    "Demonstration of how to use WP Components inside of our blocks.",
    "jsforwpworkshop"
  ),
  category: "common",
  icon: {
    background: "yellow",
    src: "editor-kitchensink"
  },
  keywords: [__("Library UI", "jsforwpworkshop")],
  attributes: {
    title: {
      type: "string",
      default: __("Enter a title", "jsforwpworkshop")
    },
    content: {
      type: "html"
    }
  },
  edit: props => {
    const {
      className,
      setAttributes,
      isSelected,
      attributes: { title, content }
    } = props;
    return (
      <div className={className}>
        <h3>
          {isSelected ? (
            <TextControl
              value={title}
              onChange={newTitle => setAttributes({ title: newTitle })}
            />
          ) : (
            title
          )}
        </h3>
        <RichText
          value={content}
          placeholder={__("Enter content here", "jsforwpworkshop")}
          onChange={newContent => setAttributes({ content: newContent })}
        />
      </div>
    );
  },
  save: props => {
    const {
      attributes: { title, content }
    } = props;
    return (
      <div>
        <h3>{title}</h3>
        <RichText.Content value={content} />
      </div>
    );
  }
});
