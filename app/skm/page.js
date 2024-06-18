"use client"

import {useState} from 'react'
import SelectedListItem from "../components/list";
import ResponsiveAppBar from "../components/navbar";
import { Card } from "@mui/material";
import surveyQuestions from "../mockData/question";
import { NavigateNextRounded } from '@mui/icons-material';
import { NavigateBeforeRounded } from '@mui/icons-material';
import CustomButton from "../components/customButton";
import { Send } from '@mui/icons-material';
import { useOptionStore } from '../hooks/useOptionStore';

export default function SurveyPage() {
  const [surveyIndex, setSurveyIndex] = useState(0);
  const { questionText, options } = surveyQuestions[surveyIndex];
  const [selectedOptions, setSelectedOption] = useOptionStore()
  const allQuestionsAnswered = Object.keys(selectedOptions).length === surveyQuestions.length;
  console.log(selectedOptions)
  const handleNavigateButton = (type) => {
    if (type === 'next') {
      setSurveyIndex((prev) => prev + 1);
    } else if (type === 'prev') {
      setSurveyIndex((prev) => prev - 1);
    }
  };

  const handleChangeAnswer = (option) => {
    setSelectedOption(surveyIndex, option);
  };

  const handleSubmitSurvey = () => {
    console.log(selectedOptions)
  }

  return (
    <>
      <ResponsiveAppBar />
      <main className="mt-4 sm:mt-10 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center font-bold text-base xs:text-xl sm:text-3xl text-center">
          <h1>DINAS KESEHATAN KOTA BANJARBARU</h1>
          <h1>SURVEY KEPUASAN MASYARAKAT</h1>
        </div>
        <span className="text-sm mt-4 mb-1">
          Pertanyaan {surveyIndex + 1}/{surveyQuestions.length}
        </span>
        <div className="bg-white rounded-t-md rounded-b-sm mx-3 pb-3 sm:min-w-[500px] sm:max-w-sm">
          {questionText ? (
            <Card className="pb-4 text-white bg-none shadow-none">
              <div className="bg-darken-blue p-3 shadow-sm break-words">
                <p>{questionText}</p>
              </div>
              <SelectedListItem
                key={surveyIndex}
                options={options}
                selectedOption={selectedOptions[surveyIndex]}
                handleChangeAnswer={handleChangeAnswer}
              />
            </Card>
          ) : null}
          <div className="flex justify-between mt-4 mx-3">
            {surveyIndex === 0 ? (
              <CustomButton variant="contained" startIcon={<NavigateBeforeRounded />} disabled={true}>
                Sebelumnya
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                startIcon={<NavigateBeforeRounded />}
                onClick={() => handleNavigateButton('prev')}
              >
                Sebelumnya
              </CustomButton>
            )}
            {surveyIndex === surveyQuestions.length - 1 ? (
              <CustomButton 
              variant="contained" 
              endIcon={<Send />} 
              onClick={() => {handleSubmitSurvey()}} 
              disabled={!allQuestionsAnswered}
              >
                KIRIM SURVEY
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                endIcon={<NavigateNextRounded />}
                onClick={() => handleNavigateButton('next')}
                disabled={!selectedOptions[surveyIndex]}
              >
                Selanjutnya
              </CustomButton>
            )}
          </div>
        </div>
      </main>
    </>
  );
}