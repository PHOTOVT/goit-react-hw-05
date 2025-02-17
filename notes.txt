1. <App/> into <BrowserRouter></BrowserRouter>
2. <Route> into </Routes> in <App>
3. <NavLink to='/'></NavLink> instead of <a>
4. const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
5. <Route path='/about' element={<About/>}>
   <Route path='aim' element={<Aim/>} 
   </Route>
6. <NavLink to='aim'></NavLink> inside About
7. <Outlet/> after <NavLink>/<nav>
8. <UserList> component & User page
9. Users - useEffect with useState of users and setUsers, async/await, getData, fetchUsers() and setUsers(data)
10. services - api.js
11. fetchUsers - async/await, data  axios.get('users'), return data.users
12. fetchUserById - async userId, data, await axios.get(`/users/${userId}`), return.data
13. fetchPostsByUserId - async userId, data. await axios.get(`/posts/user/${userId}`), return data.posts
14. UsersList - users.map, item, <li>, <Link to={`/users/${item.id}`}><Link/>, item.firstName, item.lastName
15. <Route path='/users' element={<Users />} />
<Route path='/users/:userId' element={<UserDetails />} />
16. UserDetails - useParams to get user's current ID: const {userId} = useParams(). useState[user, setUser], useEffect, getData, async\await, data, fetchUserById(user,id), setUser(data), getData(), user.id as a dependency. if(!user) {<h2>Loading<h2/>} because of useEffect after render. <Link to='info'>Info<Link/>, <Link to='posts'>Posts<Link/>, Outlet + <Route path='info' element={<h2>Info about user</h2>} />, <Route path='posts' element={<UserPosts />} /> in App
17. UserPosts - const {userId} = useParams(), useState [posts, setPosts], useEffect, const getData async(), const data = await fetchPostByUserId(userId), setPosts(data), getData() and userId as a dependency. return posts.map - item - ul - <li  key={item.id}>{item.title} </li>
18. versel.json:
{
  "rewrites":  [
    {"source": "/(.*)", "destination": "/"}
  ]
}
