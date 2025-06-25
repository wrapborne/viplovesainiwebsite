import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const requirements = [
  'Minimum 18 years of age',
  'Class 10th pass (minimum qualification)',
  'Good communication skills',
  'Willingness to learn and grow',
  'Basic computer knowledge preferred',
  'Local area knowledge is an advantage'
];

const AgentEligibility = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-600">
          Eligibility Requirements
        </CardTitle>
        <CardDescription>
          Basic qualifications to become an LIC Agent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{requirement}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Training Process:</h4>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>Submit application and documents</li>
            <li>Attend orientation session</li>
            <li>Complete 25-hour IRDA training</li>
            <li>Pass the licensing exam</li>
            <li>Start earning immediately!</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentEligibility;