import React, { useEffect, useMemo, useState } from 'react'
import { BookOpen, CheckCircle2, Clock3, Languages, NotebookPen, PlayCircle, RotateCcw, Target } from 'lucide-react'

const courseData = {
  hebrew: {
    title: 'Biblical Hebrew',
    description: 'Learn in sequence, return anytime, and keep moving without losing your place.',
    modules: [
      {
        id: 'h1',
        title: 'Module 1: Alphabet and Sounds',
        overview:
          'This first module lays the foundation for everything that comes after it. The goal is not speed for its own sake, but accurate recognition, confident pronunciation, and steady reading. By the end of this module, you should be able to identify the Hebrew consonants, recognize the final forms, work through the most common vowel signs, and read simple syllables and short word forms out loud without panic.',
        moduleGoals: [
          'Recognize and name all regular Hebrew consonants from Aleph to Tav',
          'Identify the five final forms used at the ends of words',
          'Understand the basic sound and function of major vowel signs',
          'Read simple Hebrew syllables aloud with increasing confidence',
          'Begin noticing that Hebrew is read from right to left'
        ],
        memoryItems: [
          { ref: 'Genesis 1:1a', text: 'בְּרֵאשִׁית', transliteration: 'bereshit', gloss: 'In the beginning' },
          { ref: 'Psalm 119:105a', text: 'נֵר', transliteration: 'ner', gloss: 'lamp' }
        ],
        lessons: [
          {
            id: 'h1l1',
            title: 'Consonants: Aleph to Tav',
            duration: '35 min',
            objective: 'Recognize and name each Hebrew consonant.',
            explanation:
              'Hebrew is written from right to left. At first that can feel unusual, but your eyes will adjust faster than you think. In Biblical Hebrew, the consonants carry the visible backbone of the word. The vowel points help you pronounce what the consonants are already framing. For now, your job is not to master advanced grammar. Your job is to become familiar with the shapes, names, and common sounds of the letters.',
            contentSections: [
              {
                heading: 'Core Letters to Learn',
                body: 'Aleph א, Bet ב, Gimel ג, Dalet ד, He ה, Vav ו, Zayin ז, Het ח, Tet ט, Yod י, Kaf כ, Lamed ל, Mem מ, Nun נ, Samekh ס, Ayin ע, Pe פ, Tsade צ, Qof ק, Resh ר, Shin ש, Tav ת. Some letters can take a dot called a dagesh, which may affect pronunciation. Do not try to master every pronunciation debate on day one. Learn the most common classroom values first.'
              },
              {
                heading: 'Letters That Need Extra Attention',
                body: 'Aleph is often quiet or acts as a carrier. Ayin can feel difficult because English does not really train our mouths for it. Het is a throatier sound than English h. Shin can sound like sh, while Sin is the s sound. These will become more natural with repetition.'
              },
              {
                heading: 'What to Notice',
                body: 'Do not merely stare at the letters. Say the name of each letter out loud. Then look away and try to recall it. Recognition must become active, not passive.'
              }
            ],
            drills: [
              'Read the full consonant line aloud three times from right to left',
              'Cover the names and see if you can identify each letter by sight',
              'Write each letter by hand once while saying its name aloud',
              'Review the four throat-oriented letters Aleph, He, Het, and Ayin slowly'
            ],
            checkpoint: 'You are ready to move on when you can identify most letters without guessing wildly.',
            assignment: 'Practice the consonants twice today. First by sight, then by memory. Keep your pace calm and accurate.'
          },
          {
            id: 'h1l2',
            title: 'Final Forms',
            duration: '20 min',
            objective: 'Identify letters that change shape at the end of words.',
            explanation:
              'Five Hebrew letters take a different form when they appear at the end of a word. This matters because Scripture will not pause and warn you. The shape simply changes, and you are expected to recognize the letter anyway. Learning these now will save you needless confusion later.',
            contentSections: [
              { heading: 'The Five Final Forms', body: 'Kaf ך, Mem ם, Nun ן, Pe ף, Tsade ץ. These correspond to the regular forms כ, מ, נ, פ, צ.' },
              { heading: 'How to Learn Them', body: 'Pair each regular form with its final form. See them as family, not strangers. For example, כ becomes ך at the end of a word. The sound does not become a different letter just because the clothing changed.' },
              { heading: 'Common Mistake', body: 'Many beginners act like final forms are extra letters. They are not. They are alternate end-of-word forms of familiar letters.' }
            ],
            drills: [
              'Match each regular letter with its final form from memory',
              'Say the pair aloud: Kaf and final Kaf, Mem and final Mem, and so on',
              'Write each pair five times',
              'Quiz yourself by covering one side and recalling the other'
            ],
            checkpoint: 'You are ready when you can recognize every final form instantly.',
            assignment: 'Create a small handwritten chart of all five final forms and review it twice today.'
          },
          {
            id: 'h1l3',
            title: 'Vowels and Pointing',
            duration: '40 min',
            objective: 'Read basic vowel signs and sound combinations.',
            explanation:
              'The consonants give Hebrew its structure, but the vowel points guide pronunciation. In many biblical texts used for study, vowel signs are included. That is a gift to the learner. Use it. Your goal in this lesson is not to settle every scholarly nuance of pronunciation traditions. Your goal is to recognize the common vowel signs and produce a consistent learning pronunciation.',
            contentSections: [
              { heading: 'Major Vowels to Know First', body: 'Qamets often gives an ah-type sound, Patah an ah-type sound, Tsere an eh sound, Segol an eh sound, Hireq an ee sound, Holam an oh sound, Qibbuts and Shureq an oo sound. Sheva can be silent or very brief depending on context.' },
              { heading: 'Why This Matters', body: 'Without vowels, new readers feel as though the text is hiding from them. With vowels, you can begin sounding out words methodically. This is one of the first breakthroughs in Biblical Hebrew.' },
              { heading: 'Important Caution', body: 'Do not obsess over sounding like ten different traditions at once. Pick one learning standard and stay consistent. Precision matters, but confusion helps nobody.' }
            ],
            drills: [
              'Read simple consonant plus vowel combinations aloud',
              'Practice contrasting ee, eh, ah, oh, and oo sounds',
              'Review words like בָּ, בֶּ, בִּ, בֹּ, בוּ slowly and clearly',
              'Repeat troublesome combinations until your mouth settles down'
            ],
            checkpoint: 'You are ready when common vowel signs no longer feel unfamiliar every time you see them.',
            assignment: 'Spend ten extra minutes reading letter-vowel combinations aloud. This is where confidence begins to form.'
          },
          {
            id: 'h1l4',
            title: 'Practice Reading 1',
            duration: '35 min',
            objective: 'Read simple letter and vowel combinations out loud.',
            explanation:
              'This lesson is where the earlier pieces start working together. You now have consonants, final forms, and beginning vowels. The point is to read, not merely admire the theory. Slow reading is still real reading. Accuracy first. Speed can come later.',
            contentSections: [
              { heading: 'Reading Lab', body: 'Practice syllables such as בָּ, מֶל, לָךְ, נוּ, שָׁלוֹם. Read them from right to left, sound by sound. Then blend them.' },
              { heading: 'First Scripture Contact', body: 'Work slowly through בְּרֵאשִׁית. Do not rush. Identify each consonant, each vowel, and the direction of reading. Let the word become familiar in your eyes and in your mouth.' },
              { heading: 'Building Confidence', body: 'You are not behind because you read slowly. You are building clean habits. The person who rushes through the alphabet often ends up tripping over basic words later.' }
            ],
            drills: [
              'Read ten short syllables aloud three times each',
              'Practice five short words without looking at English helps first',
              'Return to בְּרֵאשִׁית and read it aloud five times',
              'Record yourself and compare your reading from the first attempt to the fifth'
            ],
            checkpoint: 'You are ready when you can sound out short forms calmly and without freezing.',
            assignment: 'End this module by reading your practice list aloud twice, then write one short note about which letter or vowel still feels weak.'
          }
        ],
        quiz: [
          'What direction is Biblical Hebrew read?',
          'Name the five final forms.',
          'Which letters most often challenge English speakers because of throat-related sounds?',
          'What is the difference between a consonant and a vowel point in Hebrew study?',
          'Can you read בְּרֵאשִׁית aloud with confidence?'
        ]
      }
    ]
  },
  aramaic: {
    title: 'Aramaic: The Language Jesus Spoke',
    description: 'A guided path into Biblical Aramaic with strong ties to Scripture and the words of Jesus.',
    modules: [
      {
        id: 'a1',
        title: 'Module 1: Entering Aramaic',
        overview:
          'This module introduces Aramaic as a close cousin to Hebrew, while helping you respect its distinct features. The immediate goal is not scholarly dominance. It is confident familiarity. By the end of the module, you should recognize the script relationship, pronounce key sounds more steadily, remember foundational words, and read short forms without feeling like the text is mocking you.',
        moduleGoals: [
          'Recognize the basic script used for Biblical Aramaic study',
          'Notice the close relationship between Hebrew and Aramaic',
          'Learn key sounds and a small starter vocabulary',
          'Read short words and simple phrases aloud',
          "Connect the language to Jesus' spoken environment and biblical passages"
        ],
        memoryItems: [
          { ref: 'Mark 14:36', text: 'אַבָּא', transliteration: 'abba', gloss: 'Father' },
          { ref: 'Mark 5:41', text: 'טַלִיתָא קוּמִי', transliteration: 'talitha qumi', gloss: 'Little girl, arise' }
        ],
        lessons: [
          {
            id: 'a1l1',
            title: 'Alphabet Familiarization',
            duration: '30 min',
            objective: 'Recognize Aramaic script and its relationship to Hebrew.',
            explanation:
              'Biblical Aramaic is written in the same square script tradition familiar to Hebrew learners. That is good news. You are not starting from absolute zero. Still, do not assume sameness means identity. Some forms and patterns will feel familiar, but Aramaic has its own voice. The aim here is recognition and calm familiarity.',
            contentSections: [
              { heading: 'Why This Feels Familiar', body: 'If you are studying Hebrew alongside Aramaic, many letters will look familiar because the script tradition overlaps. That shared visual world can help you move faster.' },
              { heading: 'Why This Still Needs Respect', body: 'Shared script does not mean identical language behavior. Aramaic vocabulary, grammar, and common forms can differ significantly even when the writing system looks familiar.' },
              { heading: 'Your Task', body: 'Recognize the letters, say their names, and notice where Hebrew knowledge helps without becoming lazy or presumptuous.' }
            ],
            drills: [
              'Review the script slowly from right to left',
              'Compare five letters you already know from Hebrew',
              'Say the letters aloud while tracing them by hand',
              'Note any shapes that still cause hesitation'
            ],
            checkpoint: 'You are ready when the script no longer feels foreign every time you open the lesson.',
            assignment: 'Review the script twice today and write down which letters feel easiest because of Hebrew overlap.'
          },
          {
            id: 'a1l2',
            title: 'Essential Sounds',
            duration: '25 min',
            objective: 'Practice pronunciation and key differences from Hebrew.',
            explanation:
              'Aramaic shares much with Hebrew, but pronunciation work is still necessary. Some sounds will feel natural, while others may require patience. Read aloud. Ancient languages still benefit from the human mouth. Silent familiarity is weaker than vocal repetition.',
            contentSections: [
              { heading: 'Shared Sound World', body: 'Several consonants and vowel behaviors will feel close to Hebrew. Use that as a bridge.' },
              { heading: 'Pronunciation Discipline', body: 'Do not turn Aramaic into English with a robe on. Slow yourself down and let the sounds keep their ancient shape as best you can within a learning standard.' },
              { heading: 'Read Aloud on Purpose', body: 'Pronunciation improves through repetition, not through staring with concern at the page.' }
            ],
            drills: [
              'Read five simple sound combinations aloud',
              'Practice abba, ruha, and malkuta slowly',
              'Repeat difficult consonants three times each',
              'Record one short practice line and listen back'
            ],
            checkpoint: 'You are ready when the major beginner sounds no longer feel stiff in your mouth.',
            assignment: 'Spend five extra minutes saying your core Aramaic words aloud with steady rhythm.'
          },
          {
            id: 'a1l3',
            title: 'Core Words',
            duration: '30 min',
            objective: 'Learn foundational words like father, spirit, king, and kingdom.',
            explanation:
              'Vocabulary gives you handles to hold onto. Without it, the language remains mist. These first words are not random. They are chosen because they connect directly to biblical meaning, theology, and the world of Jesus\' speech.',
            contentSections: [
              { heading: 'Starter Vocabulary', body: 'אַבָּא abba, Father. רוּחָא ruha, spirit. מַלְכָּא malka, king. מַלְכוּתָא malkuta, kingdom. שְׁמַיָּא shemaya, heaven. אַרְעָא ar\'a, earth.' },
              { heading: 'How to Memorize', body: 'Say the word, say the meaning, and use it again in the same sitting. Repeat the list in short bursts rather than one long exhausted marathon.' },
              { heading: 'Spiritual Connection', body: 'These words are not merely academic items. They belong to the texture of Scripture, prayer, proclamation, and the world surrounding Jesus\' ministry.' }
            ],
            drills: [
              'Read each word aloud five times',
              'Cover the English meanings and recall them from memory',
              'Cover the Aramaic words and recall the forms from the meanings',
              'Speak the pair aloud: abba means Father, ruha means spirit, and so on'
            ],
            checkpoint: 'You are ready when you can recall most of the starter vocabulary without panic.',
            assignment: 'Review the six starter words morning and evening today.'
          },
          {
            id: 'a1l4',
            title: 'Practice Reading 1',
            duration: '35 min',
            objective: 'Read short Aramaic words and phrases aloud.',
            explanation:
              'This lesson brings the module together. Read what you know. Slow reading is honest reading. Begin with single words, then move toward short phrases associated with biblical memory and the spoken world of Jesus.',
            contentSections: [
              { heading: 'Reading Lab', body: 'Practice אַבָּא, רוּחָא, מַלְכָּא, מַלְכוּתָא, and טַלִיתָא קוּמִי. Work slowly. Sound each form clearly before trying to increase flow.' },
              { heading: 'Meaning and Reverence', body: 'When reading a phrase like talitha qumi, do not treat it like a museum item. Hear the tenderness and authority connected to Jesus\' world. Language study deepens when it remains joined to Scripture rather than floating in abstraction.' },
              { heading: 'Confidence Through Repetition', body: 'Read the same list several times. Repetition is not failure. Repetition is formation.' }
            ],
            drills: [
              'Read each practice word three times aloud',
              'Read talitha qumi slowly five times',
              'Return to abba and ruha until they feel natural',
              'Make one voice recording of your full reading list'
            ],
            checkpoint: 'You are ready when short Aramaic forms begin to look readable rather than intimidating.',
            assignment: 'Finish by reading your full practice list aloud twice and writing one note about what still feels unfamiliar.'
          }
        ],
        quiz: [
          'Why can Hebrew study help you enter Aramaic more quickly?',
          'What does abba mean?',
          'What does malkuta mean?',
          'Why is reading aloud important in ancient language study?',
          'Can you read talitha qumi with steady confidence?'
        ]
      }
    ]
  }
}

const defaultNotes = { hebrew: '', aramaic: '' }

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <div className="muted">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  )
}

function LessonButton({ lesson, index, selected, completed, onClick }) {
  return (
    <button className={`lesson-button ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div>
        <div className="muted small">Lesson {index + 1}</div>
        <div className="lesson-title">{lesson.title}</div>
      </div>
      <div className="lesson-meta">
        <span>{lesson.duration}</span>
        <span className={`pill ${completed ? 'pill-done' : 'pill-open'}`}>{completed ? 'Done' : 'Open'}</span>
      </div>
    </button>
  )
}

export default function App() {
  const [activeCourse, setActiveCourse] = useState('hebrew')
  const [completed, setCompleted] = useState({})
  const [notes, setNotes] = useState(defaultNotes)
  const [selectedLessonId, setSelectedLessonId] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})

  const current = courseData[activeCourse]
  const activeModule = current.modules[0]
  const allLessons = useMemo(() => activeModule.lessons, [activeModule])
  const totalLessons = allLessons.length
  const completedCount = allLessons.filter((lesson) => completed[lesson.id]).length
  const nextLesson = allLessons.find((lesson) => !completed[lesson.id]) || allLessons[0]
  const selectedLesson = allLessons.find((lesson) => lesson.id === selectedLessonId) || nextLesson
  const progressValue = Math.round((completedCount / totalLessons) * 100) || 0

  useEffect(() => {
    const saved = localStorage.getItem('scripture-language-academy')
    if (!saved) return
    try {
      const parsed = JSON.parse(saved)
      setCompleted(parsed.completed || {})
      setNotes(parsed.notes || defaultNotes)
      setActiveCourse(parsed.activeCourse || 'hebrew')
      setSelectedLessonId(parsed.selectedLessonId || null)
      setQuizAnswers(parsed.quizAnswers || {})
    } catch {
      // ignore bad storage
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'scripture-language-academy',
      JSON.stringify({ completed, notes, activeCourse, selectedLessonId, quizAnswers })
    )
  }, [completed, notes, activeCourse, selectedLessonId, quizAnswers])

  useEffect(() => {
    if (!selectedLessonId && nextLesson) {
      setSelectedLessonId(nextLesson.id)
    }
  }, [selectedLessonId, nextLesson])

  useEffect(() => {
    setSelectedLessonId(courseData[activeCourse].modules[0].lessons[0].id)
  }, [activeCourse])

  const toggleLesson = (lessonId) => {
    setCompleted((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }))
  }

  const resetCourse = () => {
    const ids = allLessons.map((lesson) => lesson.id)
    setCompleted((prev) => {
      const next = { ...prev }
      ids.forEach((id) => delete next[id])
      return next
    })
    setSelectedLessonId(allLessons[0].id)
  }

  return (
    <div className="page">
      <div className="container">
        <section className="hero card">
          <div className="hero-icon"><Languages size={28} /></div>
          <div>
            <h1>Self-Paced Scripture Language Academy</h1>
            <p>Stay in sequence, pause when life gets busy, and return exactly where you left off.</p>
          </div>
        </section>

        <section className="top-grid">
          <div className="card">
            <div className="section-head">
              <h2>Choose Your Course</h2>
            </div>
            <div className="tabs">
              <button className={`tab ${activeCourse === 'hebrew' ? 'active' : ''}`} onClick={() => setActiveCourse('hebrew')}>Biblical Hebrew</button>
              <button className={`tab ${activeCourse === 'aramaic' ? 'active' : ''}`} onClick={() => setActiveCourse('aramaic')}>Aramaic</button>
            </div>
            <p className="muted">{current.description}</p>
          </div>

          <div className="card">
            <div className="section-head">
              <h2><Target size={18} /> Progress Snapshot</h2>
            </div>
            <div className="progress-row">
              <span>Course Progress</span>
              <strong>{progressValue}%</strong>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${progressValue}%` }} /></div>
            <div className="stats-grid">
              <StatCard label="Completed" value={completedCount} />
              <StatCard label="Remaining" value={totalLessons - completedCount} />
            </div>
            <div className="resume-box">
              <div className="muted small">Resume Here</div>
              <div className="lesson-title">{nextLesson.title}</div>
              <div className="muted small">{nextLesson.duration}</div>
            </div>
          </div>
        </section>

        <section className="main-grid">
          <div className="left-column">
            <div className="card">
              <div className="section-head">
                <h2><PlayCircle size={18} /> Module 1 Interactive Study</h2>
                <div className="head-actions">
                  <button className="secondary-btn" onClick={() => setSelectedLessonId(nextLesson.id)}>Resume Next</button>
                  <button className="secondary-btn" onClick={resetCourse}><RotateCcw size={16} /> Reset</button>
                </div>
              </div>
              <div className="soft-box">
                <h3>{activeModule.title}</h3>
                <p>{activeModule.overview}</p>
              </div>
              <div className="goal-box">
                <h3>Module Goals</h3>
                <ul className="clean-list">
                  {activeModule.moduleGoals.map((goal) => (
                    <li key={goal}><CheckCircle2 size={16} /> {goal}</li>
                  ))}
                </ul>
              </div>
              <div className="lesson-grid">
                {activeModule.lessons.map((lesson, index) => (
                  <LessonButton
                    key={lesson.id}
                    lesson={lesson}
                    index={index}
                    selected={selectedLesson.id === lesson.id}
                    completed={!!completed[lesson.id]}
                    onClick={() => setSelectedLessonId(lesson.id)}
                  />
                ))}
              </div>
            </div>

            <div className="card lesson-panel">
              <div className="section-head">
                <div>
                  <div className="muted small">Current Lesson</div>
                  <h2>{selectedLesson.title}</h2>
                  <p className="muted">{selectedLesson.objective}</p>
                </div>
                <button className="primary-btn" onClick={() => toggleLesson(selectedLesson.id)}>
                  {completed[selectedLesson.id] ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
              </div>

              <div className="soft-box">
                <h3>Lesson Teaching</h3>
                <p>{selectedLesson.explanation}</p>
              </div>

              <div className="stack">
                {selectedLesson.contentSections.map((section) => (
                  <div className="outline-box" key={section.heading}>
                    <h3>{section.heading}</h3>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>

              <div className="outline-box">
                <h3>Practice Drills</h3>
                <ul className="dot-list">
                  {selectedLesson.drills.map((drill) => <li key={drill}>{drill}</li>)}
                </ul>
              </div>

              <div className="two-col">
                <div className="outline-box">
                  <h3>Assignment</h3>
                  <p>{selectedLesson.assignment}</p>
                </div>
                <div className="outline-box">
                  <h3>Checkpoint</h3>
                  <p>{selectedLesson.checkpoint}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="card">
              <div className="section-head">
                <h2><BookOpen size={18} /> Memory Builder</h2>
              </div>
              <div className="stack">
                {activeModule.memoryItems.map((item) => (
                  <div className="soft-box" key={item.ref}>
                    <div className="muted small">{item.ref}</div>
                    <div className="script-text">{item.text}</div>
                    <div>{item.transliteration}</div>
                    <div className="muted">{item.gloss}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="section-head">
                <h2><NotebookPen size={18} /> Module Review</h2>
              </div>
              <div className="stack">
                {activeModule.quiz.map((question, index) => (
                  <div className="question-box" key={question}>
                    <label>{index + 1}. {question}</label>
                    <textarea
                      value={quizAnswers[`${activeCourse}-${index}`] || ''}
                      onChange={(e) => setQuizAnswers((prev) => ({ ...prev, [`${activeCourse}-${index}`]: e.target.value }))}
                      placeholder="Write your answer here"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="section-head">
                <h2><Clock3 size={18} /> Study Notes</h2>
              </div>
              <textarea
                value={notes[activeCourse] || ''}
                onChange={(e) => setNotes((prev) => ({ ...prev, [activeCourse]: e.target.value }))}
                placeholder={`Write notes for ${current.title}, questions to revisit, or verses to study again.`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
