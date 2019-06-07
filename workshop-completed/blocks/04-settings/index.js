const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, ToggleControl } = wp.components;
const { RichText, InspectorControls } = wp.editor;

import classnames from "classnames";

/**
 * Register block
 */
export default registerBlockType("jsforwpworkshop/settings", {
  title: __("Workshop - Settings", "jsforwpworkshop"),
  description: __(
    "Demonstration of how to use WP Components inside of our blocks.",
    "jsforwpworkshop"
  ),
  category: "common",
  icon: {
    background: "yellow",
    src: "admin-generic"
  },
  keywords: [__("Inspector Controls", "jsforwpworkshop")],
  attributes: {
    content: {
      type: "html"
    },
    highContrast: {
      type: "boolean",
      default: false
    }
  },
  edit: props => {
    const {
      className,
      setAttributes,
      attributes: { content, highContrast }
    } = props;
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Contrast Setting", "jsforwpworkshop")}>
            <ToggleControl
              label={
                highContrast
                  ? __("Disable High Contrast", "jsforwpworkshop")
                  : __("Enable High Contrast", "jsforwpworkshop")
              }
              checked={highContrast}
              onChange={() => setAttributes({ highContrast: !highContrast })}
            />
          </PanelBody>
        </InspectorControls>
        <div
          className={classnames(className, { "high-contrast": highContrast })}
        >
          <RichText
            value={content}
            onChange={content => setAttributes({ content })}
          />
        </div>
      </Fragment>
    );
  },
  save: props => {
    const {
      attributes: { content, highContrast }
    } = props;
    return (
      <div className={highContrast && "high-contrast"}>
        <RichText.Content value={content} />
      </div>
    );
  }
});
