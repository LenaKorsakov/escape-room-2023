import Filter from '../../components/filter/filter';
import Header from '../../components/header/header';
import QuestCard from '../../components/quest-card/quest-card';
import { useAppSelector } from '../../hooks';
import { getAllQuests } from '../../store/quests-process/quests-process-selectors';

function MainPage():JSX.Element {
  const quests = useAppSelector(getAllQuests);

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
            Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <Filter />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {quests.map((quest) => (
              <QuestCard
                key={quest.id}
                quest={quest}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
