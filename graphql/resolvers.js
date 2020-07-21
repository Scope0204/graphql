// Query(문제)를 resolve(해결)
const Scope = {
  name: "scope",
  age: 20,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Scope,
  },
};

export default resolvers;
