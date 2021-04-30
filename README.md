## Project: Translation

This assignment will explore how meaning can be embedded in an artwork through creative reinterpretation of information into visuals, sound, and more. Choose `one data source` and creatively *reinterpret it into an "experience" through developing a translation methodology*. This could be through translating the data into sound, a sculpture, a meal.

Think through the relationship between the information and the final output. For example, Brian Foo's Too Blue, uses audio from New Orleans Rebirth Brass Band to map the loss of Louisiana's coastline. Using music (and specifically the music of NOLA), incites an emotional response that has a cultural connection to the subject matter.

How does the form of the visceralization (I use this term in place of visualization which maybe limits us to a visual output) challenge/augment our perception of the data?

Over the course of 4 weeks, develop your concept, a methodology of data translation and its execution. All aspects of your project will be evaluated: Concept, design, presentation, execution, technical difficulty. 

If some technical aspects are not achievable within a time frame this can be made up with design, presentation and visualization.


==================================================================
## Proposal/concept
- get weekly avg temps for 2020 (celcius)
    - https://www.wunderground.com/history/monthly/us/ny/new-york-city/KLGA/date/2020-3
    - https://www.weather.gov/media/okx/Climate/CentralPark/monthlyannualtemp.pdf
    - https://www.accuweather.com/en/us/new-york/10007/january-weather/349727?year=2020
    - https://www.climatestations.com/new-york-city/
    - https://weather.com/weather/monthly/l/New+York+City+NY?canonicalCityId=a701ee19c4ab71bbbe2f6ba2fe8c250913883e5ae9b8eee8b54f8efbdb3eec03
- get max highs/lows to establish domain/range
- convert temps to num 1-26 > convert num to alpha letter
- make 'word' with 4 letters per month (~4 wks/month)
- using sites below convert 'words' (or letters) to music
    - http://www.clarallel.com/info
    - https://wmich.edu/mus-theo/solfa-cipher/
    - https://typatone.com/
    - https://melobytes.com/en/app/melobytes
- 2 sheets of music?
    - year by months
    - year by season 
- build basic vue app
    - copy
    - sheet img
    - music audio
    - toggle between 2 sheets (cf MS problem compare section)


==================================================================
## Prototype

Data source + references: 
> https://www.ncdc.noaa.gov/cdo-web/datasets/GHCND/stations/GHCND:USW00094728/detail
> https://en.wikipedia.org/wiki/Scientific_pitch_notation

Programs
- Tone JS
- D3
- Parcel (compiler)

