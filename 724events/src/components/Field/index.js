import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  label,
  name,
  placeholder,
  onChange, // Ajout de la prop onChange
  value, // Ajout de la prop value pour les champs contrôlés
}) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          defaultValue={value} // Ajout du value
          onChange={onChange} // Ajout du onChange
          data-testid="field-testid"
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea
          name={name}
          placeholder={placeholder}
          defaultValue={value} // Ajout du value
          onChange={onChange} // Ajout du onChange
          data-testid="field-testid"
        />
      );
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
          data-testid="field-testid"
        />
      );
  }

  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func, // Ajout de la validation pour onChange
  defaultValue: PropTypes.string, // Ajout de la validation pour value
};

Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
  onChange: () => {}, // Définir une fonction vide par défaut
  defaultValue: "", // Valeur par défaut pour éviter les warnings
};

export default Field;
