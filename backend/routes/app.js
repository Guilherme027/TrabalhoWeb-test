const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const formRoutes = require('./routes/form');

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/forms', formRoutes);
