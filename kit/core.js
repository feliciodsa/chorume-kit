export const ChorumeKit = () => ({
    app: null,
    init: () => {
        const app = document.createElement('div')
        app.id = 'chorume-app'

        document.body.append(app);

        ChorumeKit().app = ChorumeKit().getElement('app');
    },
    getElement: id => {
        return document.getElementById(id);
    },
    putElement: (tagName, styles = {}, targetId = 'chorume-app',) => {
        if (!tagName || !targetId) {
            throw new Error("É necessário especificar o 'tagName' e o 'targetId'.");
        }

        const target = document.getElementById(targetId);
        if (!target) {
            throw new Error(`O elemento com ID "${targetId}" não foi encontrado.`);
        }

        const element = document.createElement(tagName);

        for (let property in styles) {
            const cssProperty = property.replace(/([A-Z])/g, "-$1").toLowerCase();
            element.style[cssProperty] = styles[property];
        }

        target.appendChild(element);

        return element;
    }
});
