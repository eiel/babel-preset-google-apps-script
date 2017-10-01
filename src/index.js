import transformES2015TemplateLiterals from "babel-plugin-transform-es2015-template-literals";
import transformES2015UnicodeRegex from "babel-plugin-transform-es2015-unicode-regex";
import transformES2015ArrowFunctions from "babel-plugin-transform-es2015-arrow-functions";
import transformES2015BlockScopedFunctions from "babel-plugin-transform-es2015-block-scoped-functions";
import transformES2015BlockScoping from "babel-plugin-transform-es2015-block-scoping";
import transformES2015Classes from "babel-plugin-transform-es2015-classes";
import transformES2015ComputedProperties from "babel-plugin-transform-es2015-computed-properties";
import transformES2015Destructuring from "babel-plugin-transform-es2015-destructuring";
import transformES2015DuplicateKeys from "babel-plugin-transform-es2015-duplicate-keys";
import transformES2015ForOf from "babel-plugin-transform-es2015-for-of";
import transformES2015FunctionName from "babel-plugin-transform-es2015-function-name";
import transformES2015Literals from "babel-plugin-transform-es2015-literals";
import transformES2015ObjectSuper from "babel-plugin-transform-es2015-object-super";
import transformES2015Parameters from "babel-plugin-transform-es2015-parameters";
import transformES2015ShorthandProperties from "babel-plugin-transform-es2015-shorthand-properties";
import transformES2015Spread from "babel-plugin-transform-es2015-spread";
import transformES3MemberExpression from "babel-plugin-transform-es3-member-expression-literals";
import transformES3PropertyLiterals from "babel-plugin-transform-es3-property-literals";
import transformExponetiationOperator from "babel-plugin-transform-exponentiation-operator";

export default function() {
  return {
    plugins: [
      transformES2015TemplateLiterals,
      transformES2015UnicodeRegex,
      transformES2015ArrowFunctions,
      transformES2015BlockScopedFunctions,
      transformES2015BlockScoping,
      transformES2015Classes,
      transformES2015ComputedProperties,
      transformES2015Destructuring,
      transformES2015DuplicateKeys,
      transformES2015ForOf,
      transformES2015FunctionName,
      transformES2015Literals,
      transformES2015ObjectSuper,
      transformES2015Parameters,
      transformES2015ShorthandProperties,
      transformES2015Spread,
      transformES3MemberExpression,
      transformES3PropertyLiterals,
      transformExponetiationOperator
    ]
  }
}
