import { useState } from 'react';
import { OnboardingScreen01 } from './components/OnboardingScreen01';
import { OnboardingScreen02 } from './components/OnboardingScreen02';
import { OnboardingScreen03 } from './components/OnboardingScreen03';
import { OnboardingScreen04 } from './components/OnboardingScreen04';
import { OnboardingScreen05 } from './components/OnboardingScreen05';
import { OnboardingScreen06 } from './components/OnboardingScreen06';
import { OnboardingScreen07 } from './components/OnboardingScreen07';
import { Dashboard } from './components/Dashboard';

type OnboardingStep = 'welcome' | 'voice-prompt' | 'recording' | 'ai-response' | 'tag-selection' | 'blank-transition' | 'lets-get-started' | 'dashboard' | 'complete';

interface UserData {
  firstName: string;
  lastName: string;
  voiceRecorded: boolean;
  userInput: string;
  selectedTags: string[];
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    voiceRecorded: false,
    userInput: '',
    selectedTags: [],
  });

  const handleScreen01Continue = (data: { firstName: string; lastName: string }) => {
    setUserData({ ...userData, ...data });
    setCurrentStep('voice-prompt');
  };

  const handleStartRecording = () => {
    setCurrentStep('recording');
  };

  const handleStopRecording = () => {
    setUserData({ ...userData, voiceRecorded: true });
    setCurrentStep('ai-response');
  };

  const handleAIResponseContinue = () => {
    setCurrentStep('tag-selection');
  };

  const handleTagSelectionContinue = () => {
    setCurrentStep('blank-transition');
  };

  const handleBlankTransitionContinue = () => {
    setCurrentStep('lets-get-started');
  };

  const handleLetsGetStartedContinue = () => {
    setCurrentStep('dashboard');
  };

  const handleSkip = () => {
    setCurrentStep('complete');
  };

  const handleBack = () => {
    if (currentStep === 'voice-prompt') {
      setCurrentStep('welcome');
    } else if (currentStep === 'recording') {
      setCurrentStep('voice-prompt');
    } else if (currentStep === 'ai-response') {
      setCurrentStep('recording');
    } else if (currentStep === 'tag-selection') {
      setCurrentStep('ai-response');
    } else if (currentStep === 'blank-transition') {
      setCurrentStep('tag-selection');
    } else if (currentStep === 'lets-get-started') {
      setCurrentStep('blank-transition');
    } else if (currentStep === 'dashboard') {
      setCurrentStep('lets-get-started');
    }
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setUserData({
      firstName: '',
      lastName: '',
      voiceRecorded: false,
      userInput: '',
      selectedTags: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[393px] h-[852px] relative">
        {/* Screen transitions with fade effect */}
        <div className="absolute inset-0 transition-opacity duration-300">
          {currentStep === 'welcome' && (
            <OnboardingScreen01 onContinue={handleScreen01Continue} />
          )}
          
          {currentStep === 'voice-prompt' && (
            <OnboardingScreen02
              onStartRecording={handleStartRecording}
              onBack={handleBack}
              onSkip={handleSkip}
            />
          )}
          
          {currentStep === 'recording' && (
            <OnboardingScreen03
              onStopRecording={handleStopRecording}
              onBack={handleBack}
              onSkip={handleSkip}
            />
          )}
          
          {currentStep === 'ai-response' && (
            <OnboardingScreen04
              onContinue={handleAIResponseContinue}
              onBack={handleBack}
              onSkip={handleSkip}
            />
          )}
          
          {currentStep === 'tag-selection' && (
            <OnboardingScreen05
              onContinue={handleTagSelectionContinue}
              onBack={handleBack}
              onSkip={handleSkip}
            />
          )}
          
          {currentStep === 'blank-transition' && (
            <OnboardingScreen06 onContinue={handleBlankTransitionContinue} />
          )}
          
          {currentStep === 'lets-get-started' && (
            <OnboardingScreen07
              onContinue={handleLetsGetStartedContinue}
            />
          )}
          
          {currentStep === 'dashboard' && (
            <Dashboard
              onCreateEntry={() => console.log('Create entry clicked')}
            />
          )}
          
          {currentStep === 'complete' && (
            <div className="bg-[#f6f6f6] overflow-clip relative rounded-[48px] size-full flex items-center justify-center flex-col gap-6 p-8">
              <div 
                className="absolute blur-[30px] filter h-[402px] left-[-64px] rounded-[1e+06px] top-[514px] w-[493px]" 
                style={{ 
                  backgroundImage: "linear-gradient(98.419deg, rgba(97, 37, 177, 0.04) 8.7497%, rgba(30, 99, 211, 0.04) 85.09%)" 
                }} 
              />
              
              <div className="relative z-10 text-center space-y-4">
                <div className="size-[80px] mx-auto rounded-full bg-gradient-to-br from-[#a77fdb] to-[#57219c] flex items-center justify-center">
                  <svg className="size-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h1 className="font-['Euclid_Circular_B:SemiBold',sans-serif] text-[28px] leading-[36px] text-[#2f3943]">
                  Welcome, {userData.firstName}!
                </h1>
                
                <p className="font-['Sora:Regular',sans-serif] text-[16px] leading-[24px] text-[#66707a] max-w-[300px] mx-auto">
                  Your account has been created successfully. {userData.voiceRecorded ? 'Your voice profile is ready!' : 'You can add your voice profile later.'}
                </p>
                
                <div className="pt-4 space-y-3">
                  <button
                    onClick={handleRestart}
                    className="w-full bg-gradient-to-r from-[#a77fdb] to-[#57219c] text-white h-[48px] rounded-[16px] font-['Sora:Bold',sans-serif] font-bold text-[16px] hover:opacity-90 transition-opacity"
                  >
                    Start Over
                  </button>
                  
                  <div className="text-sm text-[#66707a] font-['Sora:Regular',sans-serif]">
                    <p className="mb-1">Test the flow:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <button
                        onClick={() => setCurrentStep('welcome')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 1
                      </button>
                      <button
                        onClick={() => setCurrentStep('voice-prompt')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 2
                      </button>
                      <button
                        onClick={() => setCurrentStep('recording')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 3
                      </button>
                      <button
                        onClick={() => setCurrentStep('ai-response')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 4
                      </button>
                      <button
                        onClick={() => setCurrentStep('tag-selection')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 5
                      </button>
                      <button
                        onClick={() => setCurrentStep('blank-transition')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 6
                      </button>
                      <button
                        onClick={() => setCurrentStep('lets-get-started')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Screen 7
                      </button>
                      <button
                        onClick={() => setCurrentStep('dashboard')}
                        className="px-3 py-1 bg-white rounded-lg text-xs hover:bg-gray-50"
                      >
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Step indicator */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
          {(['welcome', 'voice-prompt', 'recording'] as const).map((step, index) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep === step
                  ? 'w-8 bg-gradient-to-r from-[#a77fdb] to-[#57219c]'
                  : currentStep === 'complete' && index <= 2
                  ? 'w-2 bg-[#57219c]'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}