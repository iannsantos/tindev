const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{ // Como se fosse uma chave estrangeira
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
},
{
    timestamps: true // cria uma coluna createdAt e updatedAt
}
);

module.exports = model('Dev', DevSchema);