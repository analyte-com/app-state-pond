WITH 
T16 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=16),
T17 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=17),
T18 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=18),
T19 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=19),
T20 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=20),
T21 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=21),
T22 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=22),
T23 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=23),
T24 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=24),
T26 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=26),
T27 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=27),
T28 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=28),
T29 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=29),
T30 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=30),
T31 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=31),
T46 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=46),
T49 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=49),
T51 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=51),
T107 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=107),
T130 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=130),
T131 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=131),
T155 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=155),
T249 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=249),
T250 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=250),
T296 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=296),
T302 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=302),
T340 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=340),
T341 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=341),
T347 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=347),
T357 AS (SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks where taskTreeId=357)
SELECT 
T16.value AS 'T16.value',
T17.value AS 'T17.value',
T18.value AS 'T18.value',
T19.value AS 'T19.value',
T20.value AS 'T20.value',
T21.value AS 'T21.value',
T22.value AS 'T22.value',
T23.value AS 'T23.value',
T24.value AS 'T24.value',
T26.value AS 'T26.value',
T27.value AS 'T27.value',
T28.value AS 'T28.value',
T29.value AS 'T29.value',
T30.value AS 'T30.value',
T31.value AS 'T31.value',
T46.value AS 'T46.value',
T49.value AS 'T49.value',
T51.value AS 'T51.value',
T107.value AS 'T107.value',
T130.value AS 'T130.value',
T131.value AS 'T131.value',
T155.value AS 'T155.value',
T249.value AS 'T249.value',
T250.value AS 'T250.value',
T296.value AS 'T296.value',
T302.value AS 'T302.value',
T340.value AS 'T340.value',
T341.value AS 'T341.value',
T347.value AS 'T347.value',
T357.value AS 'T357.value'
FROM vsamples s 
LEFT OUTER JOIN T16 ON T16.sampleId=s.id
LEFT OUTER JOIN T17 ON T17.sampleId=s.id
LEFT OUTER JOIN T18 ON T18.sampleId=s.id
LEFT OUTER JOIN T19 ON T19.sampleId=s.id
LEFT OUTER JOIN T20 ON T20.sampleId=s.id
LEFT OUTER JOIN T21 ON T21.sampleId=s.id
LEFT OUTER JOIN T22 ON T22.sampleId=s.id
LEFT OUTER JOIN T23 ON T23.sampleId=s.id
LEFT OUTER JOIN T24 ON T24.sampleId=s.id
LEFT OUTER JOIN T26 ON T26.sampleId=s.id
LEFT OUTER JOIN T27 ON T27.sampleId=s.id
LEFT OUTER JOIN T28 ON T28.sampleId=s.id
LEFT OUTER JOIN T29 ON T29.sampleId=s.id
LEFT OUTER JOIN T30 ON T30.sampleId=s.id
LEFT OUTER JOIN T31 ON T31.sampleId=s.id
LEFT OUTER JOIN T46 ON T46.sampleId=s.id
LEFT OUTER JOIN T49 ON T49.sampleId=s.id
LEFT OUTER JOIN T51 ON T51.sampleId=s.id
LEFT OUTER JOIN T107 ON T107.sampleId=s.id
LEFT OUTER JOIN T130 ON T130.sampleId=s.id
LEFT OUTER JOIN T131 ON T131.sampleId=s.id
LEFT OUTER JOIN T155 ON T155.sampleId=s.id
LEFT OUTER JOIN T249 ON T249.sampleId=s.id
LEFT OUTER JOIN T250 ON T250.sampleId=s.id
LEFT OUTER JOIN T296 ON T296.sampleId=s.id
LEFT OUTER JOIN T302 ON T302.sampleId=s.id
LEFT OUTER JOIN T340 ON T340.sampleId=s.id
LEFT OUTER JOIN T341 ON T341.sampleId=s.id
LEFT OUTER JOIN T347 ON T347.sampleId=s.id
LEFT OUTER JOIN T357 ON T357.sampleId=s.id
;