import React from 'react';

const InstructionWidget = () => {
  return (
    <div
      className="bg-gray-500 border-2 border-blue-200 rounded-2xl p-4 overflow-y-auto flex flex-col justify-center"
      style={{ height: '36rem' }} // Fixed height
      data-testid="instruction-widget"
    >
      <h2 className="text-lg font-semibold mb-4">Lorem ipsum dolor sit amet</h2>
      <ol className="list-decimal list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vestibulum vehicula est ut ex suscipit, nec lacinia felis gravida.</li>
        <li>Suspendisse potenti. Cras mollis urna eu nulla cursus, ut euismod nisi laoreet.</li>
        <li>Curabitur ac augue ac turpis elementum fermentum. Proin id arcu non lacus cursus.</li>
      </ol>

      <h3 className="mt-6 text-lg font-semibold">Lorem ipsum dolor sit amet:</h3>
      <ul className="list-disc list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li>Fusce ac odio at sapien condimentum hendrerit.</li>
        <li>Maecenas ultricies lacus sed justo venenatis feugiat.</li>
        <li>Aliquam erat volutpat. Nulla facilisi. Duis malesuada orci et turpis posuere.</li>
      </ul>
    </div>
  );
};

export default InstructionWidget;
