import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    pets: [
        {
            pet: { type: mongoose.Schema.Types.ObjectId, ref: 'pets' }
        }
    ]
    // ... otros campos para el usuario
});

userSchema.pre('find', function(next){
    this.populate('pets.pet');
    next();
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;