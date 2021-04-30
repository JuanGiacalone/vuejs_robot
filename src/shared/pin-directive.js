export default {
    /* eslint no-alert: 0 */
      /* eslint no-restricted-globals:0 */
    bind: (element, binding) => {
        const aux = element;
        if (binding.arg !== "position"){ return aux };

        Object.keys(binding.modifiers).forEach((key) => {

            aux.style[key] = "5px"

        });

        aux.style.position = "absolute";
        return aux;
    } 
};