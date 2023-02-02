module.exports = function (plop) {
  plop.setGenerator('React component', {
    description: 'Generates a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions() {
      return [
        {
          type: 'addMany',
          destination: 'src/scripts/components/{{pascalCase name}}',
          base: 'plop-templates/component',
          templateFiles: 'plop-templates/component',
        },
      ];
    },
  });
};
