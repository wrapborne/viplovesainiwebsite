import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const AgentApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applications = JSON.parse(localStorage.getItem('agentApplications') || '[]');
    const newApplication = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    applications.push(newApplication);
    localStorage.setItem('agentApplications', JSON.stringify(applications));

    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest. We'll contact you within 2-3 business days.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      motivation: ''
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-600">
          Apply Now
        </CardTitle>
        <CardDescription>
          Fill out the form below to start your LIC agent journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <Label htmlFor="education">Educational Qualification *</Label>
            <Input
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              required
              placeholder="e.g., Class 12th, Graduate, etc."
            />
          </div>

          <div>
            <Label htmlFor="experience">Previous Experience (if any)</Label>
            <Input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Sales, insurance, or other relevant experience"
            />
          </div>

          <div>
            <Label htmlFor="motivation">Why do you want to become an LIC Agent? *</Label>
            <Textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your motivation and goals"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full btn-primary text-lg py-3">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AgentApplicationForm;