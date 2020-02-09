# Coding Quiz Game
## Project Description

The purpose of the project was to build a quiz game that asks a series of coding related questions. The game would display a question and populate buttons for possible answers. Upon selecting the correct answer, the questions and answers would cycle to the next question until all questions were answered. The game also utilizes a timer and the ability to input and store multiple highscores. The timer is reduced and the user is given visual indication if a incorect answer is selected.

## Technologies Utilized
* Flexbox
* CSS
* Javascript
* DOM manipulation
## Instructions
The landing page of the quiz displays the current stored highscore, a timer, a brief insructions, and a start button. When clicking start, the timer will start to decrease and the first set of questions and answers will be displayed. Choose an answer by clicking on it. If the correct answer was selected, the questions and answers will cycle. If a wrong answer was selected, the answer will turn red and 5 seconds will be substracted from the timer. After the quiz has been completed, the user can input their name into the highscores list along with the time remaining. A higher score is better. After submitting a score, the scores list will populated with previous scores for comparison. To replay, refresh the page, notice that the highscore now displays the highest score currently being stored.
## Functionality
* The text "No highscore" is displayed if the game has not had any score submitted
  * This will change to display the highest score currently saved after at least 1 score is submitted
* Upon clicking start, the timer starts to decrease and the first question and answers are displayed
  * Buttons will turn red if the incorrect answer is selected
  * Additionally, the timer will decrease by 5 
* Once the quiz is completed, the a name input and submit button will be displayed for the user to enter their name
  * Upon clicking submit, the name and remaining timer will be stored and displayed in the highscore list
  * Refreshing the page will now show the highest score stored in the Highscore display
* No limit to the number of score that can be saved
* The page is responsive, but was built for the IphoneX resolution
# Current Bugs/Improvements
* Clicking on the margin around a button acts as clicking the button. This can lead to misclick events.
* Replace the submit button with a "replay" button so the user doesn't have to refresh.

## Images

[Start screen](https://lh3.googleusercontent.com/W-RHjyYnvtBi8qEYDGdq9xh_5qQizDfHF_OAMvHspcuonaBd3fDlhQPEy21m1RurLFm4mrvIHtnHQ5Xc56PxsW1XoX0tOyWqfpz6GRSC0kl0ADCy_bcfx9r8PNQs5YXv6mPWOF1I4e6j9blslBDmHLjRp4MA-xhqav4WRsTLJtMF_3gJJJVBUspuxE4BT9oMa90qiUGn3X3RYf8L3ZCqXTvFvvQbN0WRSg-p7N6O0eRy0L-ZJRGgztDPR4Uy4V_8WjKl838v-Z6BnJKh_E6oifPM-s3g-3CJRpikLLTGtRDdc_uZLjaURXNzFd_Av8-rh6v_HqXGMcc1Lg55sUTtmg2X1ZpUjXfptBYqi7CylkWnU5jL3hU-Lx4mXOx820uj5Q0pDIEdjudNGYx5Q4mhGrlILEOrDfZd58lLBAt-Gmh46uHaz4lThKgnUeZd6WiqDj19CJcZyvAEHYUyaZepBh3FEu1JQV6gcke-h_yTVP3gWjmdQjlp0R8X8-sd-9b8RXRSNZRp52dZP-LYGHgoOizQSGUro6UeqgkTTMOxv5uF5Xt9Yvb7N5u_v9SEnkryx_A8DKg-EpzpVYiCr1L55RJfybj41ctKuP5gZUO1kjYLZGKQTF8jh_OA1IA60rtdaFk-bw6YvaOHGjluCRrq0gNcFJiftf2DvCVBu9s2x2u8BkDgoRTll07n=w376-h812-no)

[Question and Answers](https://lh3.googleusercontent.com/FgqIySwHo-LVMibhnEL55vdlsJGyMMDXfBsJjhnbPVXj2Du37YzmrbZkZtxpx74is57wDee5co63M6YASZxkaI4WdKOZXiBqPiy_mn5EcsPi3rzYkHaNK8X8u7-5zkfjZPrAY9_QjDGVU3ahFxXAbrYxLhLdYep2s0xVtzwVFL50vMAyPbaTTUQQL5CEUicuLXplR0sL9-IIhvDiU6VrOYet108FUCBgrF5-jiF3DmNkUcHcOOwtif4Q7GAsMzPW6LHF_lBZ7Kh3EyRS4gaJO8dJGkVTXluyMxE2RpZRqToRZ1e2-9GDNY5wvM7_V1U39xNQT72XbuJR32pgeHpCI40nn_TYVrMrQ2RisP8ch8sji5boZcIQR1bzQMeqe6YLzUrTY4t_Tqs0oqxvPxI_ixbHqxYWCe8YSDu1azt6QSNHAgOpDVdpTNOHpJoTyXfUueH8h22rY5oSWoVcvL_LRCqBsTkagyFYHfF2ASmtKKvKU8RJG9tIbjwq5SKImxn1uYwloafmOaoVqCS_hufqrmRjUyn0f81UoXzm8JuhoWeEapLTO09BPWMdtmpb27EU-Iwd_3PzMV3uYjbETyTrV-4R0dM-fijeh8FR8f8pksceR5AUtohrS_5z-T01KsH1Z1c2JQHCI7AQlIckK8T210WlzEgN9Tnpcu9vgxIumG130Takky8FVF7r=w375-h814-no)

[Quiz End Page and Highscore Input](https://lh3.googleusercontent.com/a3ErZTn3vsSW9nRGvI3Qrws_0vGGEVUuFYXCtI9tbjU4fghQzrRddpy5LhQiQhegfPVBJJIdxejCDmgDJ28LBfk4Ryx_myr09RzQxGTFOCxDd6Ap-ZwguDvtWuUW2ueRgNo5ukogQwUQ8PpJjXWY_oNDBBcyRr-llrL3hn16Yrd9_-IthZTgSCF3oc6jRca-Zp0m3H8pMbQMiKAK4_zEBui36UAFh-erUt53bnkRtKjbHYuaz9ViyWhEpaOchPNuzqkzdPm96pdFHNXHw47omcNeeQ7IkcyExa2sowslj8NxPyUUMvE9P-AtcscLV8VOie7uUH2O7-pS-ri5tVGplU88AHmnC0ud_isI4JKpJaH-wBByROYPdizypZ8d76j2dvz-bOiFFjC7VlZ5hxLRh2gZaOeBQwkz33wE7MCxjxqrwZa8Zb6TSJ2RTQSp6CrKAgrSIf294_nchx8il3m0W9SbuZhkh3TWorOQgFF0I5fnnrxUdiNqtDV3n_rkaPGEffVwJu8YJmH-PaLH38uVLQv7V7xC-1QxZJlKe1pZjCN6JvLantcXXWO7jHfugrQwt9AAeDVp33THtrszH0My3DHUTLN8DSMNbBQeS1byKbrpfVaCu30ojxt_WxokMGRRm_U0ck0DteO9vhnnzcHPda6x2ygHYQ5PhDvJ5BXSQXUnKr2kiwBRaNg3=w376-h814-no)

[Highscore List](https://lh3.googleusercontent.com/0NWYe0J03ihW55_LhMNV8ie7f1v2PkAyha80CuFxByLd1cF1s78KyntL6IS7idr-8fg0mQ3B3SRGrrw6BScBbdMZOYdXw_1mivZrsnZpTvrUCi3WeDmyotB98TsUoErj8dOUgeVeYOH1VEo7xiiAwAq7qAmMr1eADbZpoR4yVLBQK6sOJRcXfIQKUTiNRtAudc50ixyEbNXseYrzchlbxFghBxazHJm9cEwJj9XRiWrKIRezJWTn_Su_RNr7cINglH4634N7_-tRRucDJOwwYSK5P6oEDMK2ywvSXC8-0IKofAn9G7Ohzig_HHpaevJtjnnDWyS-x085uQ2hn1UyFYdlDQhLWdsTlfU7WdUT9vRWsiE36Kidcdnj9v8NekmKSqpX_GFepejMXKr2cTQvuOvDIuR8e0lcJ9qOQSxrdFQsVczjf88osw46mCJfkWzGelmZesBvOS9qpwJ18oYBHcrmMDVCjHw5V6-Q0YTh0Ros5TjOy1_hkM2nw3s3Co1uApGF4lioGOueUj4wxORHCGBfphO7eLvC_VZOk2gsqyz5IOKZq7sj8THFOGqJQM1NpUe7Mr1-Ww3xVWX2lFZKmUFj4CaGPtaPPjYmjzpmHXhYlwqCa5cr-SHq2-QxWTF1fO7LQJ35ZgG9nap5WndWQ20Jq8F31OZvzpJQVL7mygUw4bzZ_sm__DqQ=w376-h815-no)

[Highest Score Displayed](https://lh3.googleusercontent.com/U_es6OfZanaRaoj3kbZXjS3d6UGJeWbJMR7W8FRjdhOCJ-AhbvO462BUJE2ZvIiSYFxFNGeLQeExpfM8_MU8FqPmk3tKIoUxIExkyQ1U0YnK3ntbuyJUMrlKpuMHCztn_pB6NONmPiFgUFxXUNVWNJd063eAKAE0KHzsr6sSzaeJ5_WOjx4CF87eevet3i5VSTf_30GpuqS5ZlJjiITCcP5KDeS6s8SvXZjM4jazziPCwRD_FZc-vi8ZJkk_UEV4bCS2WH0iOtf1ztc1twoi01y2JXwposQvKjrubQ5TK4EEwQ_hQjH9J6v2KLIexS4TunD1AX94HkCD7F8sTk-1AainTh8U6r7Bba7wCUqgIlI0FJKqTyA3203v87b2XU8aeop0WZpK3ciEy3_XV7nOquEDQSD4au18ax5CqZILPyrDWNsisB4t7cJwNW8GFmArF_vOzbnBFhFrPMAtchiSuZ3XxSkMgvzuDXjk5KbYd9G2QqF5V5Gg8Wvywo8x-_3zhFSQIyQ0vJL2jl0en2gkAAcRgmYqgU2lBUcuC8sAI363ch7EPxgOLqhyhF_YmIp98FgMu5fcBshnBRFOp8AT9us_lRPkB8210huJbRReJuEzEYS3jCIloXMMzfPD_sXPWokbYVKcvTp6kXpV_6ExKpX1btJDRuV4OsU-MGbdG79M5NZldxPj-Gm-=w377-h816-no)
