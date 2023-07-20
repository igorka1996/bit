import {body} from 'express-validator'

export const registrationValidation = [
    body('email', 'Неврный формат почты').isEmail(),
    body('name', 'Имя должно быть минимум 3 символа').isLength({min: 3, max: 30}),
    body('surname', 'Фамилия должна быть минимум 3 символа').isLength({min: 3, max: 30}),
    // body('avatarURL').optional().isURL(),
    // body('dateOfBirth').isDate(),
]