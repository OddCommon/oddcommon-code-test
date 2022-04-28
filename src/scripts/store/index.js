import create from 'zustand';

const useStore = create(set => ({
  numberOfTimes: 0,
  setNumberOfTimes: () => set(state => ({ numberOfTimes: state.numberOfTimes + 1 })),
}));

export default useStore;
